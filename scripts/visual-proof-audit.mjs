import { readFileSync } from 'node:fs';

const failures = [];
const passes = [];
const check = (condition, label) => {
  if (condition) passes.push(label);
  else failures.push(label);
};

const metaFrame = readFileSync('src/components/MetaFrame.css', 'utf8');
const layout = readFileSync('src/components/Layout.jsx', 'utf8');
const work = readFileSync('src/pages/Work.css', 'utf8');
const record = readFileSync('src/pages/RecordExperience.css', 'utf8');
const practice = readFileSync('src/pages/Practice.css', 'utf8');

const block = (source, selector) => {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return source.match(new RegExp(`${escaped}\\s*\\{([^}]*)\\}`))?.[1] ?? '';
};

check(/display:\s*none/.test(block(metaFrame, '.meta-frame__toggle')), 'no-JS mobile menu hides the inert disclosure control');
check(/display:\s*grid/.test(block(metaFrame, '.meta-frame__nav')), 'no-JS mobile navigation remains visible');
check(/display:\s*block/.test(block(metaFrame, '.js .meta-frame__toggle')), 'JavaScript enables the mobile disclosure control');
check(/display:\s*none/.test(block(metaFrame, '.js .meta-frame__nav')), 'JavaScript collapses the mobile navigation until requested');
check(layout.includes('const focusTargets = new Map();') && layout.includes("document.addEventListener('focusin'") && layout.includes('focusTargets.get(location.key)') && layout.includes('focusTarget.focus({ preventScroll: true })'), 'history traversal preserves a meaningful focus target as well as scroll');
check(block(work, '.record-work-head h1').includes('var(--size-display-xl)') && block(record, '.record-opening__title').includes('var(--size-display-xl)') && block(practice, '.practice-head h1').includes('var(--size-display-xl)'), 'primary openings respect the v3.1 evidence-first display ceiling');

for (const label of passes) console.log(`PASS  ${label}`);
for (const label of failures) console.error(`FAIL  ${label}`);

if (failures.length) {
  console.error(`\nVISUAL PROOF STATIC — FAIL (${failures.length})`);
  process.exit(1);
}

console.log(`\nVISUAL PROOF STATIC — PASS (${passes.length})`);
