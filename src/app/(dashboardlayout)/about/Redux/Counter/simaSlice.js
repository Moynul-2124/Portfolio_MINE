

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedId: null,
  buttonLabel: '',
};

const simaSlice = createSlice({
  name: 'sima',
  initialState,
  reducers: {
    setSimaData: (state, action) => {
      state.selectedId = action.payload.id;
      state.buttonLabel = action.payload.label;
    },
  },
});

export const { setSimaData } = simaSlice.actions;
export default simaSlice.reducer;
