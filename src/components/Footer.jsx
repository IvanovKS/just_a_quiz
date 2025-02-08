import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Link to="https://github.com/IvanovKS" target="_blank">
        go to Git
      </Link>
      <button>Click</button>
    </footer>
  );
}

export default Footer;
