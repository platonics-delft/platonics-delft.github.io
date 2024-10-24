import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Team',
      links: [
        {
          text: 'Giovanni Franzese',
          href: getPermalink('/team/giovanni'),
        },
        {
          text: 'Mox Spahn',
          href: getPermalink('/team/max'),
        },
        {
          text: 'Mariano Ramirez',
          href: getPermalink('/team/mariano'),
        },
        {
          text: 'Alumni',
          href: getPermalink('/team/alumni'),
        },
      ],
    },
    {
      text: 'Events',
      links: [
        {
          text: 'ERF 2022',
          href: getPermalink('/events/erf2022'),
        },
        {
          text: 'Robothon 2023',
          href: getPermalink('/events/robothon2023'),
        },
        {
          text: 'IROS 2024',
          href: getPermalink('/events/iros2024'),
        },
        {
          text: 'RoboHouse',
          href: getPermalink('/events/robohouse2024'),
        },
      ],
    },
    {
      text: 'Approach',
      links: [
        {
          text: 'Kinesthetic Teaching',
          href: getPermalink('/approach/kinesthetic-teaching'),
        },
        {
          text: 'Human Feedback',
          href: getPermalink('/approach/human-feedback'),
        },
        {
          text: 'User-Interface',
          href: getPermalink('/approach/user-interface'),
        },
        {
          text: 'Hardware',
          href: getPermalink('/approach/hardware'),
        },
      ],
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Team',
      links: [
        { text: 'Giovanni Franzese', href: getPermalink('/team/giovanni') },
        { text: 'Max Spahn', href: getPermalink('/team/max') },
        { text: 'Mariano Ramirez', href: getPermalink('/team/mariano') },
      ],
    },
    {
      title: 'Events',
      links: [
        { text: 'ERF 2022', href: getPermalink('/events/erf2022') },
        { text: 'Robothon 2023', href: getPermalink('/events/robothon2023') },
        { text: 'IROS 2024', href: getPermalink('/events/iros2024') },
        { text: 'Robohouse', href: getPermalink('/events/robohouse') },
      ],
    },
    {
      title: 'Approach',
      links: [
        { text: 'Kinesthetic Teaaching', href: getPermalink('/approach/kinesthetic-teaching') },
        { text: 'Human Feedback', href: getPermalink('/approach/human-feedback') },
        { text: 'User Interface', href: getPermalink('/approach/user-interface') },
        { text: 'Hardware', href: getPermalink('/approach/hardware') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/platonics-delft' },
  ],
};
