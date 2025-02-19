import { createSlice } from '@reduxjs/toolkit';

export const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('leaders');
    console.log(data);
    return data ? JSON.parse(data) : { easy: [], medium: [], hard: [] };
  } catch (error) {
    console.error('Error', error);
    return { easy: [], medium: [], hard: [] };
  }
};

const initialState = {
  difficulty: '',
  leaders: loadFromLocalStorage(),
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
      if (!state.leaders[difficulty]) {
        state.leaders[difficulty] = [];
      }
      state.leaders[difficulty].push({ name, score });
      state.leaders[difficulty] = state.leaders[difficulty]
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

      localStorage.setItem('leaders', JSON.stringify(state.leaders));
    },
  },
});

export const { setDifficulty, addPlayerResults } = winnersSlice.actions;

export default winnersSlice.reducer;
