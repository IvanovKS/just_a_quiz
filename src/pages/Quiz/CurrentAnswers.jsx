import React from 'react';
import styles from './CurrentAnswers.module.css'

function CurrentAnswers({ answers, onChange, selectedAnswer }) {
  return (
    <div className={styles.currentAnswers}>
      {answers.map((elem, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`answer-${index}`}
            name="answer"
            value={elem}
            checked={selectedAnswer === elem}
            onChange={() => onChange(elem)}
          />
          <label htmlFor={`answer-${index}`}>{elem}</label>
        </div>
      ))}
    </div>
  );
}

export default CurrentAnswers;
