import { createAsyncThunk } from '@reduxjs/toolkit';

import baseApi from '../../api/baseApi';
// import { token } from '../../services/baseApi';

export const getAllTransactionsThunk = createAsyncThunk(
  'transactions/getAllTransactionsThunk',
  async (payload, thunkAPI) => {
    try {
      const response = await baseApi.get(`/transactions/getAll`);

      payload?.onSuccess(response);

      return response.data;
    } catch (error) {
      console.log(error);

      payload?.onError(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTransactionsByParentIdThunk = createAsyncThunk(
  'transactions/getTransactionsByParentIdThunk',
  async (payload, thunkAPI) => {
    try {
      const response = await baseApi.get(`/transactions/getByOwnerId/${payload.submitData.id}`);
      console.log(response.data);

      payload?.onSuccess(response);

      return response.data;
    } catch (error) {
      console.log(error);

      payload?.onError(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk('transactions/addTransactionThunk', async (payload, thunkAPI) => {
  try {
    const response = await baseApi.post(`/transactions/create`, payload.submitData);
    console?.log(response.data);

    payload?.onSuccess(response);

    return response.data;
  } catch (error) {
    console.log(error);

    payload?.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addManyTransactionsThunk = createAsyncThunk(
  'transactions/addTransactionThunk',
  async (payload, thunkAPI) => {
    try {
      const response = await baseApi.post(`/transactions/createMany`, payload.submitData);
      console.log(response.data);

      payload?.onSuccess(response);

      return response.data;
    } catch (error) {
      console.log(error);

      payload?.onError(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'transactions/deleteTransactionThunk',
  async (payload, thunkAPI) => {
    try {
      const response = await baseApi.delete(`/transactions/${payload.submitData.id}`);
      console.log(response.data);

      payload?.onSuccess();

      return response.data;
    } catch (error) {
      console.log(error);

      payload?.onError();

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTransactionThunk = createAsyncThunk('transactions/editTransactionThunk', async (payload, thunkAPI) => {
  try {
    const response = await baseApi.patch(`/transactions/${payload.submitData.id}`, payload.submitData.updateData);

    payload?.onSuccess(response.data.data);

    return response.data;
  } catch (error) {
    console.log(error);

    payload?.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});
