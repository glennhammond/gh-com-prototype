import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Actions. Renders the correct element for the job — <Link> for internal
 * routes, <a> for external and mailto, <button> for in-page actions.
 * Never a div with a click handler.
 *
 * @param {"primary"|"outline"|"quiet"} variant
 */
export default function Button({
  to,
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}) {
  const cls = `btn btn--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link className={cls} to={to} {...rest}>
        <span>{children}</span>
      </Link>
    );
  }
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        className={cls}
        href={href}
        {...(external ? { rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        <span>{children}</span>
      </a>
    );
  }
  return (
    <button className={cls} type="button" {...rest}>
      <span>{children}</span>
    </button>
  );
}
