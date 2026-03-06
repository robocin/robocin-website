import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo-robocin-navbar.svg';
import styles from './Navbar.module.css';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo} onClick={close}>
          <img src={logo} alt="RobôCIn" className={styles.logoImg} />
        </NavLink>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTopOpen : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMidOpen : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBotOpen : ''}`} />
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          <li><NavLink to="/" end onClick={close}>{t('nav.home')}</NavLink></li>
          <li><NavLink to="/categories" onClick={close}>{t('nav.categories')}</NavLink></li>
          <li><NavLink to="/blog" onClick={close}>{t('nav.blog')}</NavLink></li>
          <li><NavLink to="/publications" onClick={close}>{t('nav.publications')}</NavLink></li>
          <li>
            <select
              className={styles.langSelect}
              value={i18n.language}
              onChange={e => i18n.changeLanguage(e.target.value)}
            >
              <option value="pt">🇧🇷 PT-BR</option>
              <option value="en">🇺🇸 EN-US</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
