import { createAsyncThunk } from '@reduxjs/toolkit';
import baseApi from 'services/baseApi';
import { token } from 'services/baseApi';

export const registerUserThunk = createAsyncThunk('auth/registerUserThunk', async (obj, thunkAPI) => {
  try {
    const { data } = await baseApi.post(`/auth/signUp`, obj.submitData);
    console.log(obj.submitData);

    obj.onSuccess(data.data);

    return data.data;
  } catch (error) {
    obj.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const registerUserByAdminThunk = createAsyncThunk('auth/registerUserByAdminThunk', async (obj, thunkAPI) => {
  try {
    const { data } = await baseApi.post(`/auth/signUpByAdmin`, obj.submitData);

    obj.onSuccess(data.data);

    return data.data;
  } catch (error) {
    obj.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logInUserThunk = createAsyncThunk('auth/logInUserThunk', async (obj, thunkAPI) => {
  try {
    const { data } = await baseApi.post(`/auth/signIn`, obj.submitData);

    obj.onSuccess(data.data);

    return data.data;
  } catch (error) {
    obj.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOutUserThunk = createAsyncThunk('auth/logOutUserThunk', async (obj, thunkAPI) => {
  const state = thunkAPI.getState();

  token.set(state.auth.token);

  try {
    await baseApi.post(`/auth/signOut`);

    obj?.onSuccess();

    token.unset();
  } catch (error) {
    obj?.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrentUserThunk = createAsyncThunk('auth/getCurrentUserThunk', async (obj, thunkAPI) => {
  const state = thunkAPI.getState();

  token.set(state.auth.token);

  try {
    const { data } = await baseApi.get(`/auth/getCurrentUser`);

    obj?.onSuccess(data.data);

    return data.data;
  } catch (error) {
    obj?.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});
