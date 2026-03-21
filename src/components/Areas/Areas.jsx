import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Areas.module.css';

function Areas() {
  const { t } = useTranslation();
  const categories = t('areas.items', { returnObjects: true });

  return (
    <section className={styles.areas}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('areas.title')}</h2>
          <Link to="/categories" className={styles.cta}>{t('areas.cta')}</Link>
        </div>
        <div className={styles.pills}>
          {categories.map((cat) => (
            <span key={cat} className={styles.pill}>{cat}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Areas;
