import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  difficulty: 'easy',
  difficulties: [
    { id: uuidv4(), value: 'easy' },
    { id: uuidv4(), value: 'medium' },
    { id: uuidv4(), value: 'hard' },
  ],
  category: 'sports',
  categories: [
    { id: uuidv4(), value: 'sports' },
    { id: uuidv4(), value: 'animals' },
    { id: uuidv4(), value: 'art' },
  ],
  questions: [],
  userAnswers: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState: initialState,
  reducers: {
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setUserAnswers: (state, action) => {
      state.userAnswers = action.payload;
    },
  },
});

export const { setDifficulty, setCategory, setQuestions, setUserAnswers } =
  quizSlice.actions;

export default quizSlice.reducer;
