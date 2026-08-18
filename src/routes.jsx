import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import Practice from "./pages/Practice.jsx";
import RiseDesignSystems from "./pages/RiseDesignSystems.jsx";
import StorylineDevelopment from "./pages/StorylineDevelopment.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import NotFound from "./pages/NotFound.jsx";
import { projects, casaSubprojects } from "./content/projects.js";

/**
 * Route table — V3.1, SEO migration Phase A (18 Aug 2026).
 *
 * Seven destinations: Home, Work, Practice, About, Contact, plus two
 * specialist-practice pages (Rise design systems, Storyline development).
 * Practice is canonical per docs/SEO-MIGRATION.md and DECISIONS.md #19,
 * superseding the earlier /services routing decision (#17). The two
 * specialist pages are preserved at their existing /services/* paths for
 * now — see the route entries below — rather than moved under /practice,
 * since Phase A is a route/naming migration, not a restructure.
 * `/services` itself 301s to `/practice` at the Vercel edge (vercel.json);
 * there is no `/services` route entry below.
 *
 * V3 adds one level of depth under /work. The CASA programme's children live
 * at /work/casa/<slug>, so the URL states the relationship without any
 * component having to. Two route entries are needed because React Router
 * matches segment by segment; both render the same CaseStudy component, which
 * resolves its record from the full pathname.
 *
 * Static paths come from content/projects.js, so adding a case study is a
 * one-file change and the sitemap follows automatically.
 *
 * Deliberately absent:
 *   /work/child-protection-program       → withheld, see content/projects.js
 *   /insights, /notes                    → no content exists; not created
 *
 * Every route is pre-rendered to static HTML by vite-react-ssg.
 */

/** Top-level case studies: everything that is not a programme child. */
const topLevel = projects.filter((p) => !p.programme);

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "work", element: <Work /> },
      {
        path: "work/:slug",
        element: <CaseStudy />,
        getStaticPaths: () => topLevel.map((p) => p.path.slice(1)),
      },
      {
        path: "work/casa/:slug",
        element: <CaseStudy />,
        getStaticPaths: () => casaSubprojects.map((p) => p.path.slice(1)),
      },
      { path: "practice", element: <Practice /> },
      { path: "services/rise-design-systems", element: <RiseDesignSystems /> },
      { path: "services/storyline-development", element: <StorylineDevelopment /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "privacy", element: <Privacy /> },
      // Rendered to dist/404.html for the host's not-found handler, and also
      // matched client-side by the catch-all below.
      { path: "404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
