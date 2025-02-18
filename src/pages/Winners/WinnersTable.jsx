import React from 'react';
import { useSelector } from 'react-redux';

function WinnersTable() {
  const winners = useSelector((state) => state.winners.leaders);

  return (
    <div>
      <h2>Top leaders of easy level</h2>
      <ul>
        {winners.easy.map((elem, index) => (
          <li key={index}>
            {index + 1}. {elem.name} — {elem.score}%
          </li>
        ))}
      </ul>
      <h2>Top leaders of medium level</h2>
      <ul>
        {winners.medium.map((elem, index) => (
          <li key={index}>
            {index + 1}. {elem.name} — {elem.score}%
          </li>
        ))}
      </ul>
      <h2>Top leaders of hard level</h2>
      <ul>
        {winners.hard.map((elem, index) => (
          <li key={index}>
            {index + 1}. {elem.name} — {elem.score}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WinnersTable;
