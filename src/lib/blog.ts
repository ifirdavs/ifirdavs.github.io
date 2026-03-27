import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'long',
  timeZone: 'UTC',
});

const yearFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  timeZone: 'UTC',
});

const monthFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  timeZone: 'UTC',
});

export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (left, right) => right.data.pubDate.valueOf() - left.data.pubDate.valueOf(),
  );
}

export function getPublishedPosts(posts: BlogPost[]): BlogPost[] {
  return sortPostsByDate(posts.filter((post) => !post.data.draft));
}

export function formatDisplayDate(date: Date): string {
  return dateFormatter.format(date);
}

export function postUrl(postOrId: BlogPost | string): string {
  const slug = typeof postOrId === 'string' ? postOrId : postOrId.id;
  return `/blog/${slug}/`;
}

export function groupPostsByYearAndMonth(posts: BlogPost[]) {
  const grouped = new Map<string, Map<string, BlogPost[]>>();

  for (const post of posts) {
    const year = yearFormatter.format(post.data.pubDate);
    const month = monthFormatter.format(post.data.pubDate);
    const months = grouped.get(year) ?? new Map<string, BlogPost[]>();
    const monthPosts = months.get(month) ?? [];

    monthPosts.push(post);
    months.set(month, monthPosts);
    grouped.set(year, months);
  }

  return Array.from(grouped.entries()).map(([year, months]) => ({
    year,
    months: Array.from(months.entries()).map(([month, monthPosts]) => ({
      month,
      posts: monthPosts,
    })),
  }));
}

export function getAdjacentPosts(posts: BlogPost[], currentId: string) {
  const currentIndex = posts.findIndex((post) => post.id === currentId);

  return {
    newer: currentIndex > 0 ? posts[currentIndex - 1] : undefined,
    older:
      currentIndex >= 0 && currentIndex < posts.length - 1
        ? posts[currentIndex + 1]
        : undefined,
  };
}
