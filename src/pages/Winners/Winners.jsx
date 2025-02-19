import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import WinnersTable from './WinnersTable';
import winnerAnimation from '../../assets/animations/winnerAnimation.json';
import styles from './Winners.module.css';

function Winners() {
  const [showWinners, setShowWinners] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWinners(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showWinners ? (
        <Lottie
          className={styles.winnerAnimation}
          animationData={winnerAnimation}
          loop={false}
          style={{ width: 200, height: 200 }}
        />
      ) : (
        <WinnersTable />
      )}
    </>
  );
}

export default Winners;
