import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../data/site';
import { getPublishedPosts, postUrl } from '../lib/blog';

export const prerender = true;

export async function GET(context: { site?: URL }) {
  const posts = getPublishedPosts(await getCollection('blog'));

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site ?? siteConfig.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postUrl(post),
    })),
    customData: '<language>en-us</language>',
  });
}
