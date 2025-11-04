


// Redux/counter/languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    current: 'English',
    options: ['English', 'বাংলা'],
  },
  reducers: {
    toggleLanguage: (state) => {
      const nextIndex = (state.options.indexOf(state.current) + 1) % state.options.length;
      state.current = state.options[nextIndex];
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
    