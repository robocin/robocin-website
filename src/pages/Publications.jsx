import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Sponsors from '../components/Sponsors/Sponsors.jsx';
import publications from '../../content/publications/publications.js';
import styles from './Publications.module.css';

const ALL = 'all';

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={styles.externalIcon}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function Publications() {
  const { t } = useTranslation();
  const [activeYear, setActiveYear] = useState(ALL);

  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  const filtered =
    activeYear === ALL ? publications : publications.filter((p) => p.year === activeYear);

  const grouped = filtered.reduce((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const sortedYears = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderContent}>
          <h1 className={styles.title}>{t('publications.title')}</h1>
          <p className={styles.subtitle}>{t('publications.subtitle')}</p>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.bodyContent}>
          <div className={styles.filters} role="toolbar" aria-label={t('publications.filterLabel')}>
            <button
              className={`${styles.filterBtn} ${activeYear === ALL ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveYear(ALL)}
            >
              {t('publications.filterAll')}
              <span className={styles.filterCount}>{publications.length}</span>
            </button>
            {years.map((year) => (
              <button
                key={year}
                className={`${styles.filterBtn} ${activeYear === year ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveYear(year)}
              >
                {year}
                <span className={styles.filterCount}>
                  {publications.filter((p) => p.year === year).length}
                </span>
              </button>
            ))}
          </div>

          <div className={styles.list}>
            {sortedYears.map((year) => (
              <section key={year} className={styles.yearGroup}>
                {activeYear === ALL && (
                  <h2 className={styles.yearHeading}>{year}</h2>
                )}
                <ul className={styles.pubList}>
                  {grouped[year].map((pub) => (
                    <li key={pub.id} className={styles.pubItem}>
                      <div className={styles.pubMeta}>
                        <span className={styles.venueBadge}>{pub.venue}</span>
                        {activeYear !== ALL && (
                          <span className={styles.yearBadge}>{pub.year}</span>
                        )}
                      </div>
                      <h3 className={styles.pubTitle}>
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.pubLink}
                        >
                          {pub.title}
                          <ExternalLinkIcon />
                        </a>
                      </h3>
                      <p className={styles.pubAuthors}>{pub.authors.join(', ')}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Sponsors />
    </div>
  );
}

export default Publications;
