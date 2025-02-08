import React, { useState } from 'react';
import { FaSun } from 'react-icons/fa';
import { MdOutlineDarkMode } from 'react-icons/md';
import styles from './ThemeSwitcher.module.css';

function ThemeSwitcher() {
  const [switcher, setSwitcher] = useState(true);
  return (
    <div>
      <button
        className={styles.switcher}
        onClick={() => setSwitcher(!switcher)}
      >
        {switcher === true ? <FaSun /> : <MdOutlineDarkMode />}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
