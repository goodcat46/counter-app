import { createAsyncThunk } from '@reduxjs/toolkit';

import baseApi from '../../api/baseApi';
// import { token } from '../../services/baseApi';

export const getAllCategoriesThunk = createAsyncThunk('categories/getAllCategoriesThunk', async (obj, thunkAPI) => {
  try {
    const response = await baseApi.get(`/directories/categories/getAll`);

    obj?.onSuccess();

    return response.data;
  } catch (error) {
    // console.log(error);

    obj?.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCategoriesByParentIdThunk = createAsyncThunk(
  'categories/getCategoriesByParentIdThunk',
  async (obj, thunkAPI) => {
    try {
      const response = await baseApi.get(`/directories/categories/getByOwnerId/${obj.submitData.id}`);
      console.log(response.data);

      obj.onSuccess();

      return response.data;
    } catch (error) {
      // console.log(error);

      obj.onError();

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCategoryThunk = createAsyncThunk('categories/addCategoryThunk', async (obj, thunkAPI) => {
  try {
    const response = await baseApi.post(`/directories/categories/create`, obj.submitData);
    console.log(response.data);

    obj.onSuccess();

    return response.data;
  } catch (error) {
    // console.log(error);

    obj.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteCategoryThunk = createAsyncThunk('categories/deleteCategoryThunk', async (obj, thunkAPI) => {
  try {
    const response = await baseApi.delete(`/directories/categories/delete/${obj.submitData.id}`);
    console.log(response.data);

    obj.onSuccess();

    return response.data;
  } catch (error) {
    console.log(error);

    obj.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editCategoryThunk = createAsyncThunk('categories/editCategoryThunk', async (obj, thunkAPI) => {
  try {
    const response = await baseApi.patch(`/directories/categories/${obj.submitData.id}`, obj.submitData.updateData);

    obj.onSuccess(response.data.data);

    return response.data;
  } catch (error) {
    console.log(error);

    obj.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});
