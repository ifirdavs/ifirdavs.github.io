export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type SocialLink = {
  label: string;
  iconClass: string;
  href: string;
};

const currentYear = new Date().getUTCFullYear();

export const siteConfig = {
  title: "Firdavsbek's Blog",
  description:
    'Personal writing on software engineering, delivery, developer experience, and building thoughtful systems on the web.',
  url: 'https://firdavsbek.com',
  author: {
    name: 'Firdavsbek Ismoilov',
    role: 'ML Researcher, Software Engineer',
    avatar: '/images/profile-portrait.jpg',
    intro:
      'Follow on social links: ',
  },
  contact: {
    email: 'self@gmail.com',
    telegramChannel: 'https://t.me/s/firdavsbekismoilov',
  },
  copyright: `© Firdavsbek Ismoilov ${currentYear}`,
  navigation: [
    { label: 'Blog', href: '/blog/' },
    {
      label: 'Channel',
      href: 'https://t.me/s/firdavsbekismoilov',
      external: true,
    },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ] satisfies NavigationItem[],
  socials: [
    {
      label: 'Telegram',
      iconClass: 'fa-brands fa-telegram',
      href: 'https://t.me/s/firdavsbekismoilov',
    },
    {
      label: 'GitHub',
      iconClass: 'fa-brands fa-github',
      href: 'https://github.com/ifirdavs',
    },
    {
      label: 'LinkedIn',
      iconClass: 'fa-brands fa-linkedin-in',
      href: 'https://www.linkedin.com/in/firdavsbek-ismoilov',
    },
    {
      label: 'Stack Overflow',
      iconClass: 'fa-brands fa-stack-overflow',
      href: 'https://stackoverflow.com/users/18988552/firdavs',
    },
    {
      label: 'Twitter/X',
      iconClass: 'fa-brands fa-x-twitter',
      href: 'https://x.com/firdavsonx',
    },
    {
      label: 'Facebook',
      iconClass: 'fa-brands fa-facebook-f',
      href: 'https://www.facebook.com/firdavsbekio',
    },
  ] satisfies SocialLink[],
};

export const seoDefaults = {
  ogImage: siteConfig.author.avatar,
  twitterCard: 'summary_large_image',
};
