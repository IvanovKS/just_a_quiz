import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Spinner from '../../components/Spinner';
import Progress from './Progress';
import Modal from './Modal';
import CurrentAnswers from './CurrentAnswers';
import selectedCategory from '../../utils/selectedCategory';
import getShuffledAnswers from '../../utils/getShuffledAnswers';
import getScore from '../../utils/getScore';
import addParser from '../../utils/addParser';
import getArrayOfCorrectAnswers from '../../utils/getArrayOfCorrectAnswers';
import {
  setQuestions,
  setUserAnswers,
  setResetUserAnswers,
} from '../../redux/slices/quizSlice';

function Quiz() {
  const dispatch = useDispatch();
  const difficulty = useSelector((state) => state.quiz.difficulty);
  const category = useSelector((state) => state.quiz.category);
  const questions = useSelector((state) => state.quiz.questions);
  const userAnswers = useSelector((state) => state.quiz.userAnswers);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
  };

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
        dispatch(setResetUserAnswers());
        dispatch(setQuestions(json.results || []));
        setCurrentQuestionIndex(0);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setError(true);
      });
  }, [category, difficulty, dispatch]);

  useEffect(() => {
    if (questions.length > 0) {
      const currentQuestion = questions[currentQuestionIndex];
      if (currentQuestion) {
        setAnswers(
          getShuffledAnswers(
            currentQuestion.correct_answer,
            currentQuestion.incorrect_answers
          )
        );
      }
    }
  }, [currentQuestionIndex, questions]);

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
          <Progress
            length={questions.length}
            currentIndex={currentQuestionIndex + 1}
          />
          <p>{addParser(questions[currentQuestionIndex].question)}</p>
          <CurrentAnswers
            answers={answers}
            selectedAnswer={selectedAnswer}
            onChange={handleAnswerChange}
          />
          {selectedAnswer && (
            <button
              onClick={() => {
                dispatch(setUserAnswers(selectedAnswer));
                if (currentQuestionIndex < questions.length - 1) {
                  setCurrentQuestionIndex((prev) => prev + 1);
                  setSelectedAnswer(null);
                } else {
                  setIsQuizFinished(true);
                }
              }}
            >
              {currentQuestionIndex < questions.length - 1
                ? 'Next Question'
                : 'Finish Quiz'}
            </button>
          )}
          {isQuizFinished && (
            <Modal>
              <h2>The quiz is over</h2>
              <p>
                Correct answers:{' '}
                {getScore(getArrayOfCorrectAnswers(questions), userAnswers)} from{' '}
                {questions.length}
              </p>
              <Link to="/">Go home</Link>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
