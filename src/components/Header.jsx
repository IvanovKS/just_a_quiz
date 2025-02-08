import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <NavLink to="/" end>
        Go home
      </NavLink>
      <NavLink to="/rules">Rules</NavLink>
      <NavLink to="/quiz">Quiz</NavLink>
    </nav>
  );
}

export default Header;
