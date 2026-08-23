import { existsSync, readFileSync } from 'node:fs';
import { about } from '../src/content/about.js';
import { clients } from '../src/content/clients.js';
import { home } from '../src/content/home.js';
import { footerLinks, site } from '../src/content/site.js';
import { STATUS } from '../src/content/status.js';
import { recordContent } from '../src/content/the-record.js';
import { personSchema, practiceSchema } from '../src/lib/schema.js';

const failures = [];
const passes = [];
const check = (condition, label) => {
  if (condition) passes.push(label);
  else failures.push(label);
};

const practiceSource = readFileSync('src/pages/Practice.jsx', 'utf8');
const tafeSource = readFileSync('src/pages/TafeConversationArtefact.jsx', 'utf8');
const aboutSource = JSON.stringify(about);

check(
  /selective/i.test(home.hero.standfirst),
  'Home makes the selective scope of THE RECORD explicit at first entry',
);
check(
  /thirty-year line on Home/i.test(practiceSource),
  'Practice distinguishes career continuity from the public evidence window',
);
check(
  practiceSource.includes('Practice reads across THE RECORD.'),
  'Practice explains its role in visitor-facing language',
);

const internalMarkers = [
  'interpretation layer',
  'canonical Project',
  'selective canonical field',
  'canonical proof',
];
for (const marker of internalMarkers) {
  check(!practiceSource.includes(marker), `Practice does not expose internal phrase: ${marker}`);
}

check(
  !tafeSource.includes('editorial inventory'),
  'TAFE provenance explains the correction without internal editorial-process language',
);
check(
  about.approach.status === STATUS.APPROVED,
  'About approach is reconciled to the qualified Practice rather than left proposed',
);
check(
  !/\bprogrammes?\b/i.test(aboutSource),
  'Canonical About history uses Australian program spelling',
);
check(
  !aboutSource.includes('all four layers') && !aboutSource.includes('one owner'),
  'About no longer exposes superseded Practice architecture',
);
check(
  footerLinks.some((item) => item.href === '/about'),
  'Canonical About route is discoverable from the secondary footer IA',
);
check(
  site.roleTitle === 'Digital Product, Experience & Learning Designer',
  'Machine-readable role title reflects the evidenced breadth of the practice',
);

const knowsAbout = new Set(personSchema.knowsAbout ?? []);
for (const topic of [
  'Digital product strategy',
  'Experience architecture',
  'Learning experience design',
  'Interaction design',
  'Learning platforms',
  'Learning technology',
  'Digital production systems',
  'Accessibility',
]) {
  check(knowsAbout.has(topic), `Person schema includes evidenced topic: ${topic}`);
}
check(
  practiceSchema.serviceType.includes('Learning technology, production systems and implementation'),
  'Practice schema includes production and implementation rather than stopping at authoring',
);

for (const project of recordContent.projects) {
  const approved = clients.some(
    (client) => client.nameApproved && project.organisation.startsWith(client.name),
  );
  check(approved, `Canonical Project organisation is cleared for naming: ${project.organisation}`);
}

if (existsSync('dist/index.html')) {
  const visibleText = (file) => readFileSync(file, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');

  const canonicalFiles = [
    'dist/index.html',
    'dist/work.html',
    'dist/practice.html',
    'dist/about.html',
    'dist/contact.html',
    'dist/work/wellbeing-studio.html',
    'dist/work/connect-and-learn.html',
    'dist/work/casa/flight-examiner-rating.html',
    'dist/work/tafe-pathways.html',
    'dist/work/tafe-pathways/supporting-conversation/exploration-environment.html',
  ];

  const releaseText = canonicalFiles.map(visibleText).join(' ');
  check(!/\bprogrammes?\b/i.test(releaseText), 'Representative canonical output uses Australian program spelling');
  for (const marker of ['interpretation layer', 'selective canonical field', 'editorial inventory', 'canonical proof']) {
    check(!releaseText.includes(marker), `Representative canonical output omits internal phrase: ${marker}`);
  }

  const homeHtml = readFileSync('dist/index.html', 'utf8');
  check(homeHtml.includes('href="/about"'), 'Built Home footer exposes the secondary About route');
  check(homeHtml.includes('Digital Product, Experience & Learning Designer'), 'Built Home structured data carries the broadened professional identity');
}

for (const label of passes) console.log(`PASS  ${label}`);
for (const label of failures) console.error(`FAIL  ${label}`);

if (failures.length) {
  console.error(`\nEDITORIAL PUBLICATION PROOF — FAIL (${failures.length})`);
  process.exit(1);
}

console.log(`\nEDITORIAL PUBLICATION PROOF — PASS (${passes.length})`);
