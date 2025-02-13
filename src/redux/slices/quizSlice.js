import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  difficulty: 'easy',
  category: 'spots',
  questions: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState: initialState,
  reducers: {
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
  },
});

export const { setDifficulty } = quizSlice.actions;

export default quizSlice.reducer;
