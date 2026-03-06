import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

function Hero() {
  const { t } = useTranslation();
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('hero.title')}</h1>
        <p className={styles.subtitle}>{t('hero.subtitle')}</p>
      </div>
    </section>
  );
}

export default Hero;
