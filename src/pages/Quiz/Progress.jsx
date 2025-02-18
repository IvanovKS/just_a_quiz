import React from 'react';
import styles from './Progress.module.css';

function Progress({ length, currentIndex }) {
  return (
    <h4 className={styles.progress}>
      Question <span>{`${currentIndex}`}</span> from <span>{`${length}`}</span>
    </h4>
  );
}

export default Progress;
