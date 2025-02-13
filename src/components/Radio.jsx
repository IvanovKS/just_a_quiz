import React from 'react';
import styles from './Radio.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setDifficulty } from '../redux/slices/quizSlice';

function Radio({ name, options }) {
  const dispatch = useDispatch();

  const selectedOption = useSelector((state) => {
    return name === 'difficulty' ? state.quiz.difficulty : state.quiz.category;
  });

  const handleChangeRadio = (event) => {
    const action = name === 'difficulty' ? setDifficulty : setCategory;
    dispatch(action(event.target.value));
  };

  return (
    <div className={styles.radioContainer}>
      {options.map((elem, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              id={elem.value}
              name={name}
              value={elem.value}
              checked={selectedOption === elem.value}
              onChange={handleChangeRadio}
            />
            <label htmlFor={elem.value}>{elem.value}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Radio;
