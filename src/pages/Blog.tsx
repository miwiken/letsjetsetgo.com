import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts, isPayloadConfigured, type BlogPost } from '../lib/payload';
import styles from './Blog.module.css';

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const configured = isPayloadConfigured();

  useEffect(() => {
    if (!configured) {
      setLoading(false);
      return;
    }
    getBlogPosts()
      .then((res) => setPosts(res.docs))
      .finally(() => setLoading(false));
  }, [configured]);

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.pageHeader}>
          <h1>Blog</h1>
          <p>Travel tips, product updates, and stories from the road.</p>
        </header>

        {loading && <p className={styles.loading}>Loading posts...</p>}

        {!loading && posts.length === 0 && (
          <div className={styles.empty}>
            <p>No posts yet — check back soon.</p>
          </div>
        )}

        {!loading && posts.length > 0 && (
          <div className={styles.grid}>
            {posts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className={styles.card}>
                {post.featuredImage && (
                  <img
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt}
                    className={styles.image}
                  />
                )}
                <div className={styles.cardBody}>
                  <time className={styles.date}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
