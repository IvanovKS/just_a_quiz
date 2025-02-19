import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { loadFromLocalStorage } from './slices/winnersSlice';

const preloadedState = {
  winners: { leaders: loadFromLocalStorage() },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('leaders', JSON.stringify(state.winners));
  } catch (error) {
    console.error('error in localStage', error);
  }
});

export default store;
