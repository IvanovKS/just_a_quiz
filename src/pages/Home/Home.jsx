import React from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import quizAnimation from '../../assets/animations/quizAnimation.json';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <div></div>
      <div>
        <Link to="/quiz">
          <Lottie
            animationData={quizAnimation}
            loop={true}
            style={{ width: 400, height: 400 }}
          />
        </Link>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
