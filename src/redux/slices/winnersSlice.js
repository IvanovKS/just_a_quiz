import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  difficulty: '',
  leaders: {
    easy: [
      {
        name: '-',
        score: 10,
      },
    ],
    medium: [
      {
        name: '-',
        score: 50,
      },
    ],
    hard: [
      {
        name: '-',
        score: 90,
      },
    ],
  },
};

const winnersSlice = createSlice({
  name: 'winners',
  initialState,
  reducers: {
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    addPlayerResults: (state, action) => {
      const { name, score, difficulty } = action.payload;
      state.leaders[difficulty].push({ name, score });
      state.leaders[difficulty] = state.leaders[difficulty]
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
    },
  },
});

export const { setDifficulty, addPlayerResults } = winnersSlice.actions;

export default winnersSlice.reducer;
