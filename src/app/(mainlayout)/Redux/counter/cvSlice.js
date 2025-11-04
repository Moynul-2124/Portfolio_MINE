



// Redux/counter/cvSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cvSlice = createSlice({
    name: 'cv',
    initialState: {
        fileUrl: null,
        fileName: null,
    },
    reducers: {
        uploadCV: (state, action) => {
            state.fileUrl = action.payload.url;
            state.fileName = action.payload.name;
        },
        clearCV: (state) => {
            state.fileUrl = null;
            state.fileName = null;
        },
    },
});

export const { uploadCV, clearCV } = cvSlice.actions;
export default cvSlice.reducer;
