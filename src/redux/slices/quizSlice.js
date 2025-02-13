import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  difficulty: 'easy',
  category: 'sports',
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
