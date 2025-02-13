import React from 'react';
import Radio from '../../components/Radio';
import { useSelector } from 'react-redux';

function Difficulty() {
  const difficulties = useSelector((state) => state.quiz.difficulties);

  return (
    <>
      <Radio name="difficulty" options={difficulties} />
    </>
  );
}

export default Difficulty;
