import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';
import sslCategory from '../../assets/ssl-category.png';
import twoDCategory from '../../assets/2d-category.jpg';
import droneCategory from '../../assets/drone-category.webp';
import humanoidCategory from '../../assets/humanoid-category.jpg';

const categoryImages = [sslCategory, twoDCategory, droneCategory, humanoidCategory];
const categoryIds = ['ssl', 'sim2d', 'drone', 'humanoid'];

function Categories() {
  const { t } = useTranslation();
  const items = t('areas.categories', { returnObjects: true });

  return (
    <section className={styles.categories}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('categories.title')}</h2>
          <Link to="/categories" className={styles.cta}>{t('categories.cta')}</Link>
        </div>
        <div className={styles.grid}>
          {items.map((name, i) => (
            <Link key={name} to={`/categories#${categoryIds[i]}`} className={styles.card}>
              <img className={styles.image} src={categoryImages[i]} alt={name} />
              <span className={styles.tag}>{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
