import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieslice';

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;