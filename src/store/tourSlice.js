import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tours: [],
};

const tourSlice = createSlice({
  name: 'tourData',
  initialState,
  reducers: {
    loadTour(state, action) {
      state.tours = action.payload;
    },
  },
});

export const { loadTour } = tourSlice.actions;
export default tourSlice.reducer;
