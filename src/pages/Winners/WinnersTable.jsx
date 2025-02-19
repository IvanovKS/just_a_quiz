import React from 'react';
import { useSelector } from 'react-redux';

function WinnersTable() {
  const winners = useSelector(
    (state) => state.winners.leaders || { easy: [], medium: [], hard: [] }
  );
  console.log(winners, 'win');
  const difficulties = useSelector((state) => state.quiz.difficulties);

  return (
    <div>
      {difficulties.map((elem) => {
        return (
          <div key={elem.id}>
            <h2>Top leaders of {elem.value} level</h2>
            <ul>
              {winners[elem.value]?.map((elem, index) => (
                <li key={index}>
                  {index + 1}. {elem.name} — {elem.score * 10}%
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default WinnersTable;
