import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './CategoriesPage.module.css';
import { categoryData } from '../../content/categories/categories.js';
import sslImage from '../assets/ssl-category.png';
import twoDImage from '../assets/2d-category.png';
import droneImage from '../assets/drone-category.png';
import humanoidImage from '../assets/humanoid-category.png';

const CATEGORY_IDS = ['ssl', 'sim2d', 'drone', 'humanoid'];

const categoryImages = {
  ssl: sslImage,
  sim2d: twoDImage,
  drone: droneImage,
  humanoid: humanoidImage,
};

function ChevronIcon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ResultsTable({ categoryId, t }) {
  const [open, setOpen] = useState(false);
  const data = categoryData[categoryId];

  return (
    <div className={styles.resultsOuter}>
      <div className={styles.resultsInner}>
        <button
          className={styles.resultsToggle}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <span>{t('categoriesPage.table.title')}</span>
          <ChevronIcon open={open} />
        </button>

        {open && (
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{t('categoriesPage.table.year')}</th>
                  {data.competitions.map((comp) => (
                    <th key={comp}>{comp}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row) => (
                  <tr key={row.year}>
                    <td className={styles.yearCell}>{row.year}</td>
                    {data.competitions.map((comp) => (
                      <td key={comp}>{row.results[comp] ?? '—'}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function CategorySection({ id, t }) {
  const info = t(`categoriesPage.${id}`, { returnObjects: true });
  const img = categoryImages[id];

  return (
    <section id={id} className={styles.categorySection}>
      {/* Full-viewport-width banner */}
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${img})` }}
        role="img"
        aria-label={info.name}
      >
        <div className={styles.bannerInner}>
          <h2 className={styles.bannerTitle}>{info.name}</h2>
        </div>
      </div>

      {/* Two-column content row */}
      <div className={styles.contentOuter}>
        <div className={styles.contentRow}>
          <div className={styles.squareImageWrapper}>
            <img src={img} alt={info.name} className={styles.squareImage} />
          </div>
          <div className={styles.descriptionBlock}>
            <p className={styles.descriptionText}>{info.description}</p>
            <ul className={styles.bulletList}>
              {info.bullets.map((bullet, i) => (
                <li key={i} className={styles.bulletItem}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Collapsible results table */}
      <ResultsTable categoryId={id} t={t} />
    </section>
  );
}

function CategoriesPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      {/* ── Intro section ── */}
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <h1 className={styles.introTitle}>{t('categoriesPage.title')}</h1>
          <p className={styles.introDescription}>{t('categoriesPage.description')}</p>
          <nav className={styles.pillNav} aria-label={t('nav.categories')}>
            {CATEGORY_IDS.map((id) => (
              <a key={id} href={`#${id}`} className={styles.pill}>
                {t(`categoriesPage.${id}.name`)}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── Category sections ── */}
      {CATEGORY_IDS.map((id) => (
        <CategorySection key={id} id={id} t={t} />
      ))}
    </div>
  );
}

export default CategoriesPage;
