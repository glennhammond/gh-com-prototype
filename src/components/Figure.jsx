import { useCallback, useEffect, useId, useRef, useState } from "react";
import { getImage } from "../lib/media.js";
import { marked } from "./Editorial.jsx";
import Icon from "./Icon.jsx";
import "./Figure.css";

/**
 * Evidence figure, the site's image grammar in one component (v3.1).
 *
 * The change from v3 is that width, mount, padding, caption and enlargement
 * are properties of the figure's editorial ROLE, never of the individual
 * image. Assigning a role is an editorial act: it is the moment somebody
 * decides how important a piece of evidence is.
 *
 * Nine roles:
 *
 *   primary      800px · one per page · the artefact carrying the central
 *                claim. The only figure permitted to break the reading
 *                column, and the break is what signals its rank.
 *   support      660px · DEFAULT · a whole screen, aligned to the text column
 *   detail       480px · a crop to the one decision being discussed
 *   photo        660px, or 1180px where the width is itself the argument
 *   pair         860px · two states under one mount, one label, one caption
 *   portrait     300px · a phone screen at close to its physical size
 *   expandable   520px inline · a technical artefact that cannot be read
 *                inline; enlargement is mandatory and the caption says so
 *   placeholder  a labelled gap where the correct asset does not exist
 *   cover        the portfolio card only, see ProjectCard
 *
 * Every role except the portfolio cover is LEFT-ALIGNED to the reading column
 * and grows rightwards. The caption is fixed at 58ch regardless of image
 * width, so a wide figure and a narrow one carry the same reading rhythm.
 *
 * AVIF with WebP fallback, explicit intrinsic dimensions so the box is
 * reserved before load and CLS stays at zero, and a `sizes` attribute that
 * matches the role rather than the container.
 */

/** Rendered width, default mount and `sizes` for each role. */
const ROLES = {
  primary: {
    mount: "bare",
    sizes: "(min-width: 940px) 800px, (min-width: 720px) 76vw, 100vw",
  },
  support: {
    mount: "bare",
    sizes: "(min-width: 800px) 660px, (min-width: 720px) 64vw, 100vw",
  },
  detail: {
    mount: "plate",
    sizes: "(min-width: 620px) 480px, 100vw",
  },
  photo: {
    mount: "none",
    sizes: "(min-width: 800px) 660px, 100vw",
  },
  pair: {
    mount: "plate",
    sizes: "(min-width: 1000px) 400px, (min-width: 720px) 42vw, 100vw",
  },
  portrait: {
    mount: "plate",
    sizes: "300px",
  },
  expandable: {
    mount: "plate",
    sizes: "(min-width: 660px) 520px, 100vw",
  },
  placeholder: {
    mount: "hatched",
    sizes: "100vw",
  },
};

/** Roles whose meaning survives being widened past the reading column. */
const WIDE_PHOTO_SIZES = "(min-width: 1240px) 1180px, 100vw";

export default function Figure({
  role,
  image,
  pair,
  placeholder,
  alt,
  caption,
  area,
  note,
  index,
  mount,
  full = false,
  artefact = false,
  prototype = false,
  expandable = false,
  priority = false,
  sizes,
  className = "",
  /* Retained so a record that has not yet been given a role still renders.
     Legacy `wide` maps to `primary`; it is not a width of its own. */
  wide = false,
}) {
  const [open, setOpen] = useState(false);

  const resolvedRole =
    role ??
    (placeholder ? "placeholder" : pair ? "pair" : wide ? "primary" : "support");

  const spec = ROLES[resolvedRole] ?? ROLES.support;
  const resolvedMount = mount ?? (artefact ? "artefact" : spec.mount);
  const mustEnlarge = resolvedRole === "expandable";
  const canEnlarge = mustEnlarge || expandable;

  const images = pair ?? (image ? [{ image, alt }] : []);
  const resolved = images
    .map((i) => ({ ...i, src: getImage(i.image) }))
    .filter((i) => i.src);

  if (resolved.length === 0 && !placeholder) return null;

  const resolvedSizes =
    sizes ??
    (full && resolvedRole === "photo" ? WIDE_PHOTO_SIZES : spec.sizes);

  /* Phone pairs sit at 260px each rather than filling half the mount. */
  const isPhonePair =
    resolvedRole === "pair" &&
    Boolean(pair?.every((i) => i.image?.includes("mobile")));

  return (
    <figure
      className={[
        "fig",
        `fig--${resolvedRole}`,
        `fig--mount-${resolvedMount}`,
        full && "fig--full",
        isPhonePair && "fig--phones",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {(area || index || prototype) && (
        <p className="fig__label">
          {index && <span className="fig__index">{index}</span>}
          {area && <span className="fig__area">{area}</span>}
          {prototype && (
            <span className="fig__flag">
              <Icon name="flagged" size={16} />
              Template or prototype
            </span>
          )}
        </p>
      )}

      <div className="fig__mount">
        {placeholder ? (
          <PlaceholderPlate {...placeholder} />
        ) : (
          resolved.map((item) => (
            <Picture
              key={item.image}
              item={item}
              sizes={resolvedSizes}
              priority={priority}
            />
          ))
        )}

        {canEnlarge && resolved.length === 1 && (
          <button
            type="button"
            className="fig__enlarge"
            onClick={() => setOpen(true)}
          >
            <Icon name="enlarge" size={16} />
            <span>Enlarge</span>
            <span className="visually-hidden">: {resolved[0].alt}</span>
          </button>
        )}

        {resolvedRole === "primary" && (
          <span className="fig__reg" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
        )}
      </div>

      {(caption || note || mustEnlarge) && (
        <figcaption className="fig__cap">
          {marked(caption)}
          {mustEnlarge && (
            <span className="fig__cap-note">
              Shown small on purpose. Enlarge to read it.
            </span>
          )}
          {note && <span className="fig__note">{note}</span>}
        </figcaption>
      )}

      {open && (
        <ImageDialog
          item={resolved[0]}
          caption={caption}
          onClose={() => setOpen(false)}
        />
      )}
    </figure>
  );
}

/* -------------------------------------------------------------------------- */

function Picture({ item, sizes, priority }) {
  return (
    <picture>
      <source type="image/avif" srcSet={item.src.avif} sizes={sizes} />
      <source type="image/webp" srcSet={item.src.webp} sizes={sizes} />
      <img
        className="fig__img"
        src={item.src.src}
        alt={item.alt}
        width={item.src.width}
        height={item.src.height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        {...(priority ? { fetchpriority: "high" } : {})}
      />
    </picture>
  );
}

/**
 * A labelled gap. Used wherever the correct image does not exist, is not
 * attributable, or is too small to publish. It states what belongs here and
 * why it is missing, so the asset can be dropped in without re-reading the
 * copy, and so an empty slot can never be mistaken for a design choice, or
 * quietly filled with a screen from another project.
 */
function PlaceholderPlate({ label, note, ratio = "16 / 9" }) {
  return (
    <div className="phplate" style={{ aspectRatio: ratio }}>
      <p className="phplate__label">
        <span className="phplate__tag">Image to supply</span>
        {label}
      </p>
      {note && <p className="phplate__note">{marked(note)}</p>}
    </div>
  );
}

/**
 * Accessible expanded-image dialog.
 *
 * Native <dialog> is avoided because its top-layer behaviour differs enough
 * across the browsers this site has to support that testing it properly is
 * more work than implementing the pattern. This does the four things that
 * actually matter: labelled dialog role, focus moved in and restored on close,
 * focus trapped while open, and Escape.
 *
 * The panel is capped at the asset's native width. Enlarging a 903px source
 * to 1400px would present blur as detail.
 */
function ImageDialog({ item, caption, onClose }) {
  const ref = useRef(null);
  const closeRef = useRef(null);
  const returnTo = useRef(null);
  const titleId = useId();

  useEffect(() => {
    returnTo.current = document.activeElement;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (returnTo.current instanceof HTMLElement) returnTo.current.focus();
    };
  }, []);

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = ref.current?.querySelectorAll(
        'button, [href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  return (
    <div
      className="fdialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      ref={ref}
      onKeyDown={onKeyDown}
    >
      <div className="fdialog__scrim" onClick={onClose} aria-hidden="true" />
      <div
        className="fdialog__panel"
        style={{ maxWidth: `${item.src.width + 48}px` }}
      >
        <div className="fdialog__bar">
          <p id={titleId} className="fdialog__title">
            Enlarged view
          </p>
          <button
            type="button"
            className="fdialog__close"
            onClick={onClose}
            ref={closeRef}
          >
            <Icon name="close" size={16} />
            <span>Close</span>
          </button>
        </div>
        <img
          className="fdialog__img"
          src={item.src.src}
          srcSet={item.src.webp}
          sizes="100vw"
          alt={item.alt}
          width={item.src.width}
          height={item.src.height}
        />
        {caption && <p className="fdialog__caption">{marked(caption)}</p>}
      </div>
    </div>
  );
}
