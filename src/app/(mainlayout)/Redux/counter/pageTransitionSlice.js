
// store/pageTransitionSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 'home', // 'home' | 'resume'
  transitionActive: false,
};

const pageTransitionSlice = createSlice({
  name: 'pageTransition',
  initialState,
  reducers: {
    goToResume(state) {
      state.currentPage = 'resume';
      state.transitionActive = true;
    },
    returnHome(state) {
      state.currentPage = 'home';
      state.transitionActive = false;
    },
    resetTransition(state) {
      state.transitionActive = false;
    },
  },
});

export const { goToResume, returnHome, resetTransition } = pageTransitionSlice.actions;
export default pageTransitionSlice.reducer;
    