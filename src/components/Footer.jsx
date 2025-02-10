import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import styles from './Footer.module.css';
import clickAnimation from '../assets/animations/clickAnimation.json';

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className={styles.footer}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to="https://github.com/IvanovKS/just_a_quiz" target="_blank">
          source code on GitHub
        </Link>
        {isHovered && (
          <Lottie
            animationData={clickAnimation}
            loop={true}
            style={{
              width: 70,
              height: 70,
              position: 'absolute',
              right: '-50px',
            }}
          />
        )}
      </div>
      <p>{currentYear}</p>
    </footer>
  );
}

export default Footer;
