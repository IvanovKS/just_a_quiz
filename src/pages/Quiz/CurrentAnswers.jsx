import React from 'react';

function CurrentAnswers({ answers, onChange, selectedAnswer }) {
  return (
    <>
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
    </>
  );
}

export default CurrentAnswers;
