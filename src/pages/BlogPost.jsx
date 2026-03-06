import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { loadBlogPosts } from '../utils/markdown.js';
import Sponsors from '../components/Sponsors/Sponsors.jsx';
import BlogCard from '../components/BlogCard/BlogCard.jsx';
import styles from './BlogPost.module.css';

function BlogPost() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    loadBlogPosts(i18n.language).then((posts) => {
      const found = posts.find((p) => p.slug === slug);
      if (!found) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      setPost(found);
      setRelated(posts.filter((p) => p.slug !== slug).slice(0, 3));
      setLoading(false);
    });
  }, [slug, i18n.language]);

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.centered}>
          <p>{t('blog.loading')}</p>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className={styles.page}>
        <div className={styles.centered}>
          <p>{t('blog.notFound')}</p>
          <Link to="/blog" className={styles.backLink}>
            {t('blog.backToBlog')}
          </Link>
        </div>
      </div>
    );
  }

  const { data, content } = post;

  const date = data.date
    ? new Date(data.date).toLocaleDateString(
        i18n.language === 'pt' ? 'pt-BR' : 'en-US',
        { year: 'numeric', month: 'long', day: 'numeric' }
      )
    : null;

  const words = content.trim().split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(words / 200));

  const meta = [data.author, date, `${readTime} ${t('blog.minRead')}`]
    .filter(Boolean)
    .join(' · ');

  return (
    <div className={styles.page}>
      <div className={styles.postHeader}>
        <div className={styles.postHeaderContent}>
          <Link to="/blog" className={styles.back}>
            ← {t('blog.backToBlog')}
          </Link>
          <p className={styles.meta}>{meta}</p>
          <h1 className={styles.title}>{data.title}</h1>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.bodyContent}>
          <div className={styles.prose}>
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className={styles.related}>
          <div className={styles.relatedContent}>
            <h2 className={styles.relatedTitle}>{t('blog.alsoRead')}</h2>
            <div className={styles.relatedGrid}>
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </div>
      )}
      <Sponsors />
    </div>
  );
}

export default BlogPost;
