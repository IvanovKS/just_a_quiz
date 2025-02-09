import React from 'react';
import Lottie from 'lottie-react';
import notFoundAnimation from '../../assets/animations/notFound.json';

function NotFound() {
  return (
    <>
      <Lottie animationData={notFoundAnimation} loop={true} style={{ width: 300, height: 300 }}/>
    </>
  );
}

export default NotFound;
