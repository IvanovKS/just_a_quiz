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
    { id: uuidv4(), value: 'animal' },
    { id: uuidv4(), value: 'art' },
  ],
  questions: [],
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
  },
});

export const { setDifficulty, setCategory } = quizSlice.actions;

export default quizSlice.reducer;
