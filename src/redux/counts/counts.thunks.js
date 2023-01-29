import { createAsyncThunk } from '@reduxjs/toolkit';

import baseApi from '../../services/baseApi';
// import { token } from '../../services/baseApi';

export const getAllCountsThunk = createAsyncThunk('counts/getAllCountsThunk', async (payload, thunkAPI) => {
  try {
    const response = await baseApi.get(`/counts/getAll`);

    payload?.onSuccess();

    return response.data;
  } catch (error) {
    // console.log(error);

    payload?.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCountsByParentIdThunk = createAsyncThunk(
  'counts/getCountsByParentIdThunk',
  async (payload, thunkAPI) => {
    try {
      const response = await baseApi.get(`/counts/getByOwnerId/${payload.submitData.id}`);
      console.log(response.data);

      payload.onSuccess();

      return response.data;
    } catch (error) {
      // console.log(error);

      payload.onError();

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCountThunk = createAsyncThunk('counts/addCountThunk', async (payload, thunkAPI) => {
  try {
    const response = await baseApi.post(`/counts/create`, payload.submitData);
    console.log(response.data);

    payload.onSuccess();

    return response.data;
  } catch (error) {
    // console.log(error);

    payload.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteCountThunk = createAsyncThunk('counts/deleteCountThunk', async (payload, thunkAPI) => {
  try {
    const response = await baseApi.delete(`/counts/${payload.submitData.id}`);
    console.log(response.data);

    payload.onSuccess();

    return response.data;
  } catch (error) {
    console.log(error);

    payload.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editCountThunk = createAsyncThunk('counts/editCountThunk', async (payload, thunkAPI) => {
  try {
    const response = await baseApi.patch(`/counts/${payload.submitData.id}`, payload.submitData.updateData);

    payload.onSuccess(response.data.data);

    return response.data;
  } catch (error) {
    console.log(error);

    payload.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});
