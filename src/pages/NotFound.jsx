import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { SectionHead } from "../components/Section.jsx";
import { nav } from "../content/site.js";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | Glenn Hammond"
        description="That page does not exist."
        path="/404"
      />
      <div className="section container container--narrow">
        <SectionHead
          level={1}
          eyebrow="404"
          headline="That page is not here."
          standfirst="It may have moved during the site rebuild. These are the five places worth trying."
        />
        <ul className="prose">
          <li>
            <Link to="/">Home</Link>
          </li>
          {nav.map((item) => (
            <li key={item.href}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
