import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPost, type BlogPost as BlogPostType } from '../lib/payload';
import styles from './BlogPost.module.css';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    getBlogPost(slug)
      .then((p) => {
        if (!p) setNotFound(true);
        else setPost(p);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.page}>
        <div className="container">
          <p className={styles.loading}>Loading...</p>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.notFound}>
            <h1>Post not found</h1>
            <Link to="/blog">Back to blog</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <article className={styles.article}>
          <Link to="/blog" className={styles.back}>
            &larr; Back to blog
          </Link>
          <header>
            <time className={styles.date}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h1>{post.title}</h1>
          </header>
          {post.featuredImage && (
            <img
              src={post.featuredImage.url}
              alt={post.featuredImage.alt}
              className={styles.hero}
            />
          )}
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}
