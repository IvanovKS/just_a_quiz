import React from 'react';
import Lottie from 'lottie-react';
import notFoundAnimation from '../../assets/animations/notFound.json';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.notFound}>
      <Lottie
        animationData={notFoundAnimation}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
}

export default NotFound;
