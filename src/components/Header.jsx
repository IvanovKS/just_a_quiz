import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import styles from './Header.module.css';
import avatar from '../assets/images/android-chrome-192x192.png';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img src={avatar} alt="avatar" />
        <h1>Just a quiz</h1>
      </div>
      <nav className={styles.headerCenter}>
        <NavLink to="/" end>
          Go home
        </NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
        <NavLink to="/winners">Winners</NavLink>
      </nav>
      <div className={styles.headerRight}>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
