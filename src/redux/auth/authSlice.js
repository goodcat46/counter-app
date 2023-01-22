import { createSlice } from '@reduxjs/toolkit';
// import { actionLogInUser, actionLogOutUser, actionSetCurrentUser } from './authActions';
import { registerUserThunk, registerUserByAdminThunk, logInUserThunk, logOutUserThunk, getCurrentUserThunk } from './authThunks';

const initialState = {
  user: [],
  token: '',
  isLoading: false,
  isLoggedIn: true,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: {
    //* РЕЄСТРАЦІЯ
    [registerUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;

      console.log(payload);
    },
    [registerUserThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [registerUserThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    // * РЕЄСТРАЦІЯ АДМІНІСТРАТОРОМ
    [registerUserByAdminThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [registerUserByAdminThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [registerUserByAdminThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    //* ВХІД
    [logInUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = payload.access_token;
    },
    [logInUserThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [logInUserThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload.error;
    },

    //* ВИХІД
    [logOutUserThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = initialState.user;
      state.token = null;
    },
    [logOutUserThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [logOutUserThunk.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload.error;
    },
    //* ПОТОЧНИЙ ЮЗЕР
    [getCurrentUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;

      state.user = { ...state.user, ...payload };
    },
    [getCurrentUserThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCurrentUserThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
