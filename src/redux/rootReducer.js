import { combineReducers } from '@reduxjs/toolkit';
import quizReducer from './slices/quizSlice';
import winnersReducer from './slices/winnersSlice';

const rootReducer = combineReducers({
  quiz: quizReducer,
  winners: winnersReducer,
});

export default rootReducer;
