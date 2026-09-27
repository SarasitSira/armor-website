export const DEMO_HREF = 'https://calendly.com/sarasit_armor/book-a-demo-with-armor';
export const CONTACT_EMAIL = 'info@armor-exo.com';
export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`;
export const LINKEDIN_HREF = 'https://www.linkedin.com/company/armor-exo';
export const SHIELD_HREF = 'https://shield.armor-exo.com';
export const INSTAGRAM_HREF = 'https://www.instagram.com/armor.exo/';
export const MAILING_LIST_HREF = 'https://mailinglist.armor-exo.com/subscription/form';

export const NAV_LINKS = [
  { to: '/industries', label: 'Industries' },
  {
    to: '/solutions',
    label: 'Solutions',
    children: [
      { to: '/solutions/bexo', label: 'Bexo', description: 'Wearable back exosuit' },
      { to: '/solutions/shield', label: 'Shield', description: 'Ergonomics studio' },
    ],
  },
  { to: '/contact', label: 'Contact' },
];
