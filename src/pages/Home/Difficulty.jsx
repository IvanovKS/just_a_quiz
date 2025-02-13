import React from 'react';
import Radio from '../../components/Radio';

function Difficulty() {
  const difficulties = [
    { value: 'easy' },
    { value: 'medium' },
    { value: 'hard' },
  ];

  return (
    <>
      <Radio name="difficulty" options={difficulties} />
    </>
  );
}

export default Difficulty;
