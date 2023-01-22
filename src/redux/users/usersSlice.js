import { createSlice } from '@reduxjs/toolkit';
// import { actionLogInUser, actionLogOutUser, actionSetCurrentUser } from './authActions';
import { getAllUsersThunk } from './usersThunks';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  extraReducers: {
    //* ОТРИМАТИ ВСІХ КОРИСТУВАЧІВ
    [getAllUsersThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.users = [...payload];

      console.log('getAllUsersThunk', payload);
    },
    [getAllUsersThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllUsersThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // // * РЕЄСТРАЦІЯ АДМІНІСТРАТОРОМ
    // [registerUserByAdminThunk.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    // },
    // [registerUserByAdminThunk.pending]: (state, action) => {
    //   state.isLoading = true;
    // },
    // [registerUserByAdminThunk.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload.error;
    // },
    // //* ВХІД
    // [logInUserThunk.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.isLoggedIn = true;
    //   state.token = payload.access_token;
    // },
    // [logInUserThunk.pending]: (state, { payload }) => {
    //   state.isLoading = true;
    // },
    // [logInUserThunk.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.isLoggedIn = false;
    //   state.error = action.payload.error;
    // },

    // //* ВИХІД
    // [logOutUserThunk.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.isLoggedIn = false;
    //   state.user = initialState.user;
    //   state.token = null;
    // },
    // [logOutUserThunk.pending]: (state, action) => {
    //   state.isLoading = true;
    // },
    // [logOutUserThunk.rejected]: (state, action) => {
    //   state.isLoading = true;
    //   state.error = action.payload.error;
    // },
    // //* ПОТОЧНИЙ ЮЗЕР
    // [getCurrentUserThunk.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.isLoggedIn = true;

    //   state.user = { ...state.user, ...payload };
    // },
    // [getCurrentUserThunk.pending]: (state, action) => {
    //   state.isLoading = true;
    // },
    // [getCurrentUserThunk.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error;
    //   state.isLoggedIn = false;
    // },
  },
});

export const usersReducer = usersSlice.reducer;
