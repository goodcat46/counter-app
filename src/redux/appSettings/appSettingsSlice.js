import { createSlice } from '@reduxjs/toolkit';

import { actionChangeDarkMode, actionResetAppSettings } from './appSettingsActions';

const initialState = {
  isDarkMode: true,
};

export const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  extraReducers: {
    [actionChangeDarkMode]: (state, action) => {
      state.isDarkMode = !state.isDarkMode;
    },
    [actionResetAppSettings]: (state, action) => {
      state.isDarkMode = false;
      state = initialState;
      console.log('app reset');
    },
  },
});

export const appSettingsReducer = appSettingsSlice.reducer;
