import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from '../NotFound/NotFound';
import Spinner from '../../components/Spinner';
import selectedCategory from '../../utils/selectedCategory';
import { setQuestions } from '../../redux/slices/quizSlice';

function Quiz() {
  const dispatch = useDispatch();
  const difficulty = useSelector((state) => state.quiz.difficulty);
  const category = useSelector((state) => state.quiz.category);
  const questions = useSelector((state) => state.quiz.questions) || [];

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${selectedCategory(
        category
      )}&difficulty=${difficulty}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        dispatch(setQuestions(json.results));
        setCurrentQuestionIndex(0);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setError(true);
      });
  }, [category, difficulty, dispatch]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <NotFound />
      ) : questions.length === 0 ? (
        <NotFound />
      ) : (
        <div>
          <p>{`question №${currentQuestionIndex + 1} from ${
            questions.length
          }`}</p>
          <p>{questions[currentQuestionIndex].question}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
