

"use client"

// features/heroTextSlice.js
import { createSlice } from '@reduxjs/toolkit';

const texts = ["I'm a Freelancer", "I'm a Developer"];

const heroTextSlice = createSlice({
    name: 'heroText',
    initialState: {
        index: 0,
        texts,
    },
    
    reducers: {
        toggleText: (state) => {
            state.index = (state.index + 1) % state.texts.length;
        },
    },
});

export const { toggleText } = heroTextSlice.actions;
export default heroTextSlice.reducer;
