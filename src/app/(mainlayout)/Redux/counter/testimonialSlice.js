




import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSlide: 0,
};

const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState,
  reducers: {
    setSlide: (state, action) => {
      state.currentSlide = action.payload;
    },
  },
});

export const { setSlide } = testimonialSlice.actions;
export default testimonialSlice.reducer;
