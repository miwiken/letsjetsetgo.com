/**
 * Payload CMS client.
 * Works without CMS credentials — returns empty data gracefully.
 * Once VITE_PAYLOAD_API_URL is set, real content flows in.
 */

const PAYLOAD_API_URL = import.meta.env.VITE_PAYLOAD_API_URL || '';

interface PayloadResponse<T> {
  docs: T[];
  totalDocs: number;
  totalPages: number;
  page: number;
  hasNextPage: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  featuredImage?: {
    url: string;
    alt: string;
  };
}

async function payloadFetch<T>(
  collection: string,
  params?: Record<string, string>
): Promise<PayloadResponse<T>> {
  if (!PAYLOAD_API_URL) {
    return { docs: [], totalDocs: 0, totalPages: 0, page: 1, hasNextPage: false };
  }

  const url = new URL(`/api/${collection}`, PAYLOAD_API_URL);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }

  try {
    const res = await fetch(url.toString());
    if (!res.ok) {
      console.warn(`Payload CMS: ${res.status} fetching ${collection}`);
      return { docs: [], totalDocs: 0, totalPages: 0, page: 1, hasNextPage: false };
    }
    return await res.json();
  } catch (err) {
    console.warn('Payload CMS unavailable:', err);
    return { docs: [], totalDocs: 0, totalPages: 0, page: 1, hasNextPage: false };
  }
}

export async function getBlogPosts(limit = 10, page = 1): Promise<PayloadResponse<BlogPost>> {
  return payloadFetch<BlogPost>('posts', {
    limit: String(limit),
    page: String(page),
    sort: '-publishedAt',
    where: JSON.stringify({ _status: { equals: 'published' } }),
  });
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const res = await payloadFetch<BlogPost>('posts', {
    where: JSON.stringify({ slug: { equals: slug }, _status: { equals: 'published' } }),
    limit: '1',
  });
  return res.docs[0] || null;
}

export function isPayloadConfigured(): boolean {
  return Boolean(PAYLOAD_API_URL);
}
