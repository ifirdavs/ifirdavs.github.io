export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type SocialLink = {
  label: string;
  shortLabel: string;
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
    role: 'Software Engineer',
    avatar: '/images/profile-portrait.jpg',
    intro:
      'Welcome to my personal blog where I share insights, tutorials, and experiences in software engineering. Follow me on my social media channels to stay updated with my latest posts and projects.',
  },
  contact: {
    email: 'self@gmail.com',
    telegramChannel: 'https://t.me/firdavsbekismoilov',
  },
  copyright: `© Firdavsbek Ismoilov ${currentYear}`,
  navigation: [
    { label: 'Blog', href: '/blog/' },
    {
      label: 'Channel',
      href: 'https://t.me/firdavsbekismoilov',
      external: true,
    },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ] satisfies NavigationItem[],
  socials: [
    { label: 'Telegram', shortLabel: 'TG', href: 'https://t.me/firdavsbekismoilov' },
    { label: 'GitHub', shortLabel: 'GH', href: 'https://github.com/ifirdavs' },
    {
      label: 'LinkedIn',
      shortLabel: 'IN',
      href: 'https://www.linkedin.com/in/firdavsbek-ismoilov',
    },
    {
      label: 'Stack Overflow',
      shortLabel: 'SO',
      href: 'https://stackoverflow.com/users/18988552/firdavs',
    },
    {
      label: 'Twitter/X',
      shortLabel: 'X',
      href: 'https://x.com/firdavsonx',
    },
    {
      label: 'Facebook',
      shortLabel: 'FB',
      href: 'https://www.facebook.com/firdavsbekio',
    },
  ] satisfies SocialLink[],
};

export const seoDefaults = {
  ogImage: siteConfig.author.avatar,
  twitterCard: 'summary_large_image',
};
