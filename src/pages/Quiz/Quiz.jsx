import React, { useEffect, useState } from 'react';
import NotFound from '../NotFound/NotFound';
import selectedCategory from '../../utils/selectedCategory';
import { useSelector } from 'react-redux';

function Quiz() {
  const difficulty = useSelector((state) => state.quiz.difficulty);
  const category = useSelector((state) => state.quiz.category);

  const [newQuiz, setNewQuiz] = useState({ results: [] });
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log(category, difficulty);
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${selectedCategory(
        category
      )}&difficulty=${difficulty}`
    )
      .then((res) => res.json())
      .then((json) => {
        setNewQuiz(json);
      })
      .catch((error) => {
        console.log(error.message);
        setError(true);
      });
  }, [category, difficulty]);

  return (
    <div>
      {error ? (
        <NotFound />
      ) : (
        newQuiz.results?.map((elem, index) => (
          <p key={index}>{elem.question}</p>
        ))
      )}
    </div>
  );
}

export default Quiz;
