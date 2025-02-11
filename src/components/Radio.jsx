import React, { useState } from 'react';
import styles from './Radio.module.css';

function Radio({ name, options }) {
  const [selectedOptionRadio, setSelectedOptionRadio] = useState(
    options[0].value
  );

  const handleChangeRadio = (event) => {
    setSelectedOptionRadio(event.target.value);
  };

  return (
    <div className={styles.radioContainer}>
      {options.map((elem) => {
        return (
          <div key={elem.id}>
            <input
              type="radio"
              id={elem.value}
              name={name}
              value={elem.value}
              checked={selectedOptionRadio === elem.value}
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
