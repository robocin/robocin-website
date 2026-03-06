import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import imeLogo from '../../assets/ime-logo.png';
import mouraLogo from '../../assets/moura-logo.svg';
import styles from './Partners.module.css';

function Partners() {
  const { t } = useTranslation();

  return (
    <section className={styles.partners}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2 className={styles.title}>{t('partners.title')}</h2>
          <p className={styles.description}>{t('partners.description')}</p>
        </div>

        <div className={styles.right}>
          <div className={styles.card}>
            <p className={styles.caption}>{t('partners.caption')}</p>
            <div className={styles.images}>
              <img src={imeLogo} alt="IME" className={styles.partnerLogo} />
              <img src={mouraLogo} alt="Moura" className={styles.partnerLogo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
