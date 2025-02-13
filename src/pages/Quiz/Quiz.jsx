import React, { useEffect, useState } from 'react';
import NotFound from '../NotFound/NotFound';

function Quiz() {
  const [newQuiz, setNewQuiz] = useState({ results: [] });
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy')
      .then((res) => res.json())
      .then((json) => {
        setNewQuiz(json);
      })
      .catch((error) => {
        console.log(error.message);
        setError(true);
      });
  }, []);

  return (
    <div>
      {error ? (
        <NotFound />
      ) : (
        newQuiz.results?.map((elem) => (
          <p key={elem.correct_answer}>{elem.question}</p>
        ))
      )}
    </div>
  );
}

export default Quiz;
