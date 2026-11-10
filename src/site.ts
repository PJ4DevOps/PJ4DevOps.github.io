// Site-wide settings. Placeholders are marked TODO until Pat supplies the details.
export const SITE = {
  name: 'Pat Johnson',
  description: 'Writing, publications and photographs by Pat Johnson.',
  // TODO: Pat's public contact email, if she wants one on the site.
  email: '',
  linkedin: 'https://www.linkedin.com/in/allaboutpat/',
};

// 'full' republishes each post's text with a link to the original;
// 'summary' shows only the description and links out to the original.
export const WRITING_MODE: 'full' | 'summary' = 'full';

export const NAV = [
  { href: '/writing/', label: 'Writing' },
  { href: '/photos/', label: 'Photos' },
  { href: '/about/', label: 'About' },
];
