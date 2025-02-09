import React from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import quizAnimation from '../../assets/animations/quizAnimation.json';

function Home() {
  return (
    <div>
      <Link to="/quiz">
        <Lottie
          animationData={quizAnimation}
          loop={true}
          style={{ width: 400, height: 400 }}
        />
      </Link>
    </div>
  );
}

export default Home;
