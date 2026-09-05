import { STATUS, SOURCE } from './status.js';

export const site = {
  origin: 'https://glennhammond.com',
  name: 'Glenn Hammond',
  descriptor: 'Digital design and learning practice',
  descriptorLong: 'Digital design and learning practice · Brisbane, working Australia-wide',
  roleTitle: 'Digital Learning & Experience Designer',
  location: {
    locality: 'Brisbane',
    region: 'QLD',
    country: 'AU',
    served: 'Australia',
    label: 'Brisbane, working with organisations Australia-wide',
    status: STATUS.APPROVED,
    source: SOURCE.MASTER_COPY,
  },
  email: 'glenn@glennhammond.com',
  linkedin: 'https://linkedin.com/in/glennhammond/',
  showAvailability: false,
  offerCvDownload: false,
};

// Home is available through the identity/wordmark. Keep the primary navigation
// deliberately small; About is discoverable in the footer and from Home.
export const nav = [
  { href: '/work', label: 'Work' },
  { href: '/practice', label: 'Practice' },
];
export const navCta = { href: '/contact', label: 'Contact' };
export const footerLinks = [
  ...nav,
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
];
