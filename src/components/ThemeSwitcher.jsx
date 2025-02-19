import React, { useContext } from 'react';
import { FaSun } from 'react-icons/fa';
import { MdOutlineDarkMode } from 'react-icons/md';
import styles from './ThemeSwitcher.module.css';
import { ThemeContext } from '../context/ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button className={styles.switcher} onClick={toggleTheme}>
        {theme === 'light' ? (
          <FaSun />
        ) : (
          <MdOutlineDarkMode style={{ color: 'white' }} />
        )}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
