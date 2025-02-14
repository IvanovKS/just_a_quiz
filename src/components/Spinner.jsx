import React from 'react';
import Lottie from 'lottie-react';
import spinnerAnimation from '../assets/animations/spinnerAnimation.json';
import styles from './Spinner.module.css';

function Spinner() {
  return (
    <div className={styles.spinner}>
      <Lottie
        animationData={spinnerAnimation}
        loop={true}
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
}

export default Spinner;
