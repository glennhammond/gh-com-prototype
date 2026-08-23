import CaseStudy from '../pages/CaseStudy.jsx';
import { projects } from '../content/projects.js';

export const Component = CaseStudy;
export const getStaticPaths = () => projects
  .filter((project) => !project.programme && project.path !== '/work/wellbeing-studio')
  .map((project) => project.path.slice(1));
