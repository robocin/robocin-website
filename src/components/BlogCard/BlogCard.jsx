import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './BlogCard.module.css';

function stripMarkdown(text) {
  return text
    .replace(/^#+\s+.+$/gm, '')
    .replace(/\*{1,3}([^*]+)\*{1,3}/g, '$1')
    .replace(/`[^`]+`/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^[-*+>]\s+/gm, '')
    .replace(/\n+/g, ' ')
    .trim();
}

function BlogCard({ post }) {
  const { t, i18n } = useTranslation();
  const { slug, data, content } = post;

  const date = data.date
    ? new Date(data.date).toLocaleDateString(
        i18n.language === 'pt' ? 'pt-BR' : 'en-US',
        { year: 'numeric', month: 'long', day: 'numeric' }
      )
    : null;

  const words = content.trim().split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(words / 200));

  const excerpt =
    data.excerpt ||
    stripMarkdown(content).slice(0, 160) + '…';

  const meta = [date, `${readTime} ${t('blog.minRead')}`]
    .filter(Boolean)
    .join(' · ');

  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        {data.tags && (
          <span className={styles.tag}>{data.tags.split(',')[0].trim()}</span>
        )}
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.meta}>{meta}</p>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link to={`/blog/${slug}`} className={styles.cta}>
          {t('blog.readMore')} →
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;
