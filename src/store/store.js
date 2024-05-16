import { configureStore } from '@reduxjs/toolkit';
import tourSlice from './tourSlice';

const store = configureStore({
  reducer: {
    tour: tourSlice,
  },
});

export default store;
