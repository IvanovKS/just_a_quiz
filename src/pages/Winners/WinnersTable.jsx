import React from 'react';
import { useSelector } from 'react-redux';
import styles from './WinnersTable.module.css';

function WinnersTable() {
  const winners = useSelector(
    (state) => state.winners.leaders || { easy: [], medium: [], hard: [] }
  );
  const difficulties = useSelector((state) => state.quiz.difficulties);

  return (
    <div>
      {difficulties.map((elem) => {
        return (
          <div key={elem.id}>
            {winners[elem.value].length === 0 ? (
              <h2>Top leaders of {elem.value} level is empty</h2>
            ) : (
              <>
                <h2>Top leaders of {elem.value} level</h2>
                <ul>
                  {winners[elem.value]?.map((elem, index) => (
                    <li className={styles.winnersList} key={index}>
                      {index + 1}. {elem.name} — {elem.score * 10}%
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default WinnersTable;
