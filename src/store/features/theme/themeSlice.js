// src/features/theme/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state: Default theme is light
const initialState = {
    theme: 'dark',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
