import { Link } from "react-router-dom";
import Wordmark from "./Wordmark.jsx";
import Icon from "./Icon.jsx";
import { footerLinks, site } from "../content/site.js";
import "./Footer.css";

/**
 * Site footer.
 *
 * Contact sits in the same position on every page — WCAG 2.2 SC 3.2.6
 * (Consistent Help). Email is shown as well as the form: a form-only practice
 * reads as gated, and referrals prefer email (Blueprint §15, §21).
 *
 * v3.1: the footer moves from an ink band to raised paper. A dark footer on
 * every page works against the 10% ink target, and on the homepage it put two
 * ink blocks in sequence directly beneath the close. The four-colour layer
 * spine now carries the terminal mark instead.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p className="spine site-footer__spine" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </p>
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Wordmark className="site-footer__mark" />
          <p className="site-footer__descriptor">{site.descriptorLong}</p>
        </div>

        <div className="site-footer__cols">
          <nav aria-label="Footer">
            <h2 className="eyebrow site-footer__heading">Pages</h2>
            <ul className="site-footer__list">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow site-footer__heading">Contact</h2>
            <ul className="site-footer__list">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                  <Icon name="external" size={16} />
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
              <li className="site-footer__plain">{site.location.label}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container site-footer__base">
        <p className="site-footer__fine">
          &copy; {year} Glenn Hammond. {site.responsePromise.short}.
        </p>
      </div>
    </footer>
  );
}
