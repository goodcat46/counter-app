import { createSlice } from '@reduxjs/toolkit';

import { actionChangeTheme, actionResetAppSettings } from './appSettingsActions';

const initialState = {
  isDarkTheme: false,
};

export const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  extraReducers: {
    [actionChangeTheme]: (state, action) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
    [actionResetAppSettings]: (state, action) => {
      state.isDarkTheme = false;
      state = initialState;
      console.log('app reset');
    },
  },
});

export const appSettingsReducer = appSettingsSlice.reducer;
