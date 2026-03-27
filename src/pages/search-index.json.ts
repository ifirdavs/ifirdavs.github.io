import { getCollection } from 'astro:content';
import { getPublishedPosts, postUrl } from '../lib/blog';

export const prerender = true;

export async function GET() {
  const posts = getPublishedPosts(await getCollection('blog'));

  return new Response(
    JSON.stringify(
      posts.map((post) => ({
        title: post.data.title,
        slug: post.id,
        url: postUrl(post),
        description: post.data.description,
        tags: post.data.tags,
        pubDate: post.data.pubDate.toISOString(),
      })),
      null,
      2,
    ),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    },
  );
}
