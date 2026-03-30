import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.wrapper}>
      <ScrollRestoration />
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
