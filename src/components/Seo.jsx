import { Head } from "vite-react-ssg";
import { site } from "../content/site.js";

/**
 * Per-page metadata — Blueprint §25.
 *
 * `Head` is rendered into the static HTML at build time, so titles,
 * descriptions, canonicals, Open Graph tags and JSON-LD are all present in the
 * source. Link previews and crawlers never depend on JavaScript.
 */
export default function Seo({
  title,
  description,
  path = "/",
  jsonLd,
  image,
  noindex = false,
}) {
  const url = `${site.origin}${path === "/" ? "" : path}`;
  const ogImage = `${site.origin}${image ?? "/og.png"}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  );
}
