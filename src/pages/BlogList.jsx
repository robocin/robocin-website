import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { loadBlogPosts } from '../utils/markdown.js';
import Sponsors from '../components/Sponsors/Sponsors.jsx';
import BlogCard from '../components/BlogCard/BlogCard.jsx';
import styles from './BlogList.module.css';

function BlogList() {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    loadBlogPosts(i18n.language).then((loaded) => {
      setPosts(loaded);
      setLoading(false);
    });
  }, [i18n.language]);

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderContent}>
          <h1 className={styles.title}>{t('blog.title')}</h1>
          <p className={styles.subtitle}>{t('blog.subtitle')}</p>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.bodyContent}>
          {loading ? (
            <p className={styles.message}>{t('blog.loading')}</p>
          ) : posts.length === 0 ? (
            <p className={styles.message}>{t('blog.empty')}</p>
          ) : (
            <div className={styles.grid}>
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Sponsors />
    </div>
  );
}

export default BlogList;
