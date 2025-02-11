import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Radio from '../../components/Radio';

function Difficulty() {
  const difficulties = [
    { value: 'Easy', id: uuidv4() },
    { value: 'Medium', id: uuidv4() },
    { value: 'Hard', id: uuidv4() },
  ];

  return (
    <>
      <Radio name="difficulty" options={difficulties} />
    </>
  );
}

export default Difficulty;
