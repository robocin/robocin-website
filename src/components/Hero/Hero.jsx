import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';
import groupPhoto from '../../assets/group-photo.jpg';

function Hero() {
  const { t } = useTranslation();
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${groupPhoto})` }}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>{t('hero.title')}</h1>
        <p className={styles.subtitle}>{t('hero.subtitle')}</p>
      </div>
    </section>
  );
}

export default Hero;
