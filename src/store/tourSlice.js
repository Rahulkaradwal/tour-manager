import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   description: '',
  //   difficulty: null,
  //   duration: null,
  //   durationWeeks: null,
  //   guides: [],
  //   id: null,
  //   imageCover: '',
  //   images: [],
  //   locations: [],
  //   maxGroupSize: null,
  //   name: null,
  //   price: null,
  //   ratingsAverage: null,
  //   ratingsQuantity: null,
  //   secretTour: null,
  //   slug: null,
  //   startDates: [],
  //   startLocation: {
  //     type: null,
  //     coordinates: [],
  //     address: '',
  //     description: '',
  //   },
  //   summary: '',
};

const tourSlice = createSlice({
  name: 'tourData',
  initialState,
  reducers: {
    loadTour(state, action) {
      state += action.payload;
    },
  },
});

export const { loadTour } = tourSlice.actions;
export default tourSlice.reducer;
