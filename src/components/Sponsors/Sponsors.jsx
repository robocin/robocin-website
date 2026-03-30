import { useTranslation } from 'react-i18next';
import cinLogo from '../../assets/cin-logo.svg';
import incogniaLogo from '../../assets/incognia-logo.svg';
import microsoftLogo from '../../assets/microsoft-logo.svg';
import mouraLogo from '../../assets/moura-logo.svg';
import senaiLogo from '../../assets/senai-logo.png';
import styles from './Sponsors.module.css';

const SPONSORS = [
  { src: cinLogo, alt: 'CIn' },
  { src: incogniaLogo, alt: 'Incognia' },
  { src: microsoftLogo, alt: 'Microsoft' },
  { src: mouraLogo, alt: 'Moura' },
  { src: senaiLogo, alt: 'SENAI' },
];

function Sponsors() {
  const { t } = useTranslation();

  return (
    <section className={styles.sponsors}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{t('sponsors.title')}</h2>
      </div>

      <div className={styles.carousel}>
        <div className={styles.track}>
          {/* Sponsors is copied three times over to avoid glitches */}
          {[...SPONSORS, ...SPONSORS, ...SPONSORS].map((sponsor, i) => (
            <div key={i} className={styles.item}>
              <img src={sponsor.src} alt={sponsor.alt} className={styles.logo} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.inner}>
        <div className={styles.cta}>
          <p className={styles.ctaText}>{t('sponsors.ctaText')}</p>
          <a href="mailto:robocin@cin.ufpe.br" className={styles.ctaButton}>{t('sponsors.ctaButton')}</a>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
