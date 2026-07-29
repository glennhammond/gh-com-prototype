import manifest from "./image-manifest.json";

/**
 * Resolves an image name to hashed build URLs, srcsets and intrinsic size.
 *
 * Derivatives and the manifest are produced by `npm run images`
 * (scripts/images.mjs). Content records reference a base name such as
 * "casa-interview"; this returns everything a <picture> needs, including
 * width and height so the box is reserved before load and CLS stays at zero.
 */

const files = import.meta.glob("../assets/*/*.{avif,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

/** { "casa-interview": { avif: {800: url, …}, webp: {…} } } */
const index = {};

for (const [path, url] of Object.entries(files)) {
  const match = /\/([a-z0-9-]+)-(\d+)\.(avif|webp)$/.exec(path);
  if (!match) continue;
  const [, name, width, ext] = match;
  index[name] ??= { avif: {}, webp: {} };
  index[name][ext][Number(width)] = url;
}

const srcset = (map) =>
  Object.keys(map)
    .map(Number)
    .sort((a, b) => a - b)
    .map((w) => `${map[w]} ${w}w`)
    .join(", ");

/**
 * @param {string} name base name, e.g. "casa-interview"
 * @returns {{avif:string,webp:string,src:string,width:number,height:number}|null}
 */
export function getImage(name) {
  const entry = index[name];
  const meta = manifest[name];
  if (!entry || !meta) {
    if (import.meta.env.DEV) {
      console.warn(`[media] no derivatives for "${name}" — run npm run images`);
    }
    return null;
  }
  const widths = Object.keys(entry.webp)
    .map(Number)
    .sort((a, b) => b - a);
  return {
    avif: srcset(entry.avif),
    webp: srcset(entry.webp),
    src: entry.webp[widths[0]],
    width: meta.width,
    height: meta.height,
  };
}
