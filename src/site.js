export const DEMO_HREF = 'https://calendly.com/sarasit_armor/book-a-demo-with-armor';
export const CONTACT_EMAIL = 'info@armor-exo.com';
export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`;
export const LINKEDIN_HREF = 'https://www.linkedin.com/company/armor-exo';
export const SHIELD_HREF = 'https://shield.armor-exo.com';
export const INSTAGRAM_HREF = 'https://www.instagram.com/armor.exo/';
export const MAILING_LIST_HREF = 'https://mailinglist.armor-exo.com/subscription/form';
// listmonk public form: posting an email with this list UUID subscribes it to the "Newsletter" list
export const NEWSLETTER_LIST_ID = '4bda8482-acc1-4f41-bcb3-7f71cb08a128';

// Top-bar links. `key` looks up the label in the current language (messages/*.js -> nav)
export const NAV_LINKS = [
  { to: '/industries', key: 'industries' },
  {
    to: '/solutions',
    key: 'solutions',
    children: [
      { to: '/solutions/bexo', label: 'Bexo', descriptionKey: 'bexoDescription' },
      { to: '/solutions/shield', label: 'Shield', descriptionKey: 'shieldDescription' },
    ],
  },
  { to: '/contact', key: 'contact' },
];
