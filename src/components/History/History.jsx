import { useTranslation } from 'react-i18next';
import styles from './History.module.css';

function History() {
  const { t } = useTranslation();
  const milestones = t('history.milestones', { returnObjects: true });

  return (
    <section className={styles.history}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{t('history.title')}</h2>
          <p className={styles.subtitle}>{t('history.subtitle')}</p>
        </div>

        <div className={styles.timeline}>
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`${styles.item} ${index % 2 === 1 ? styles.itemRight : ''}`}
            >
              <div className={styles.card}>
                <span className={styles.year}>{milestone.year}</span>
                <h3 className={styles.milestoneTitle}>{milestone.title}</h3>
                <p className={styles.milestoneDesc}>{milestone.description}</p>
              </div>
              <div className={styles.dot} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default History;
