import React from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import quizAnimation from '../../assets/animations/quizAnimation.json';
import Category from './Category';
import Difficulty from './Difficulty';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeLeft}>
        <h3>Select type:</h3>
        <Category />
      </div>
      <div className={styles.homeCenter}>
        <Link to="/quiz">
          <Lottie
            animationData={quizAnimation}
            loop={true}
            style={{ width: 300, height: 300 }}
          />
        </Link>
      </div>
      <div className={styles.homeRight}>
        <h3>Select difficulty:</h3>
        <Difficulty />
      </div>
    </div>
  );
}

export default Home;
