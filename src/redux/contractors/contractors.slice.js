import { createSlice } from '@reduxjs/toolkit';
import {
  getAllCategoriesThunk,
  getCategoriesByParentIdThunk,
  addCategoryThunk,
  deleteCategoryThunk,
  editCategoryThunk,
} from 'redux/contractors/contractorsThunks';
const initialState = {
  isLoading: false,
  error: null,
  contractors: [],
};

export const contractorsSlice = createSlice({
  name: 'contractors',
  initialState,
  extraReducers: {
    [getAllCategoriesThunk.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.contractors = action.payload.data;
    },
    [getAllCategoriesThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllCategoriesThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [getCategoriesByParentIdThunk.fulfilled]: (state, action) => {},
    [getCategoriesByParentIdThunk.pending]: (state, action) => {},
    [getCategoriesByParentIdThunk.rejected]: (state, action) => {},

    [addCategoryThunk.fulfilled]: (state, action) => {
      state.isloading = false;
      state.contractors.push(action.payload.data);
    },
    [addCategoryThunk.pending]: (state, action) => {
      state.isloading = true;
    },
    [addCategoryThunk.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    },

    [deleteCategoryThunk.fulfilled]: (state, action) => {},
    [deleteCategoryThunk.pending]: (state, action) => {},
    [deleteCategoryThunk.rejected]: (state, action) => {},

    [editCategoryThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const index = state.contractors.findIndex(el => el._id === payload.data._id);

      state.contractors[index] = { ...payload.data };

      console.log(index, state.contractors[index].isArchived);
    },
    [editCategoryThunk.pending]: (state, action) => {},
    [editCategoryThunk.rejected]: (state, action) => {},
  },
});

export const contractorsReducer = contractorsSlice.reducer;
