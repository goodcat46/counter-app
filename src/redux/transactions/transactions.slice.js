import { createSlice } from '@reduxjs/toolkit';
import {
  getAllTransactionsThunk,
  addManyTransactionsThunk,
  addTransactionThunk,
  deleteTransactionThunk,
  editTransactionThunk,
} from 'redux/transactions/transactions.thunks';
import { transactionsTableTitles as tableTitles, transactionsTestData } from 'data';
const initialState = {
  isLoading: false,
  error: null,
  tableTitles,
  transactions: [...transactionsTestData],
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [getAllTransactionsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.transactions = action.payload.data;
    },
    [getAllTransactionsThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllTransactionsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addManyTransactionsThunk.fulfilled]: (state, action) => {
      state.isloading = false;
      state.transactions = [...state.transactions, ...action.payload.data];
    },
    [addManyTransactionsThunk.pending]: (state, action) => {
      state.isloading = true;
    },
    [addManyTransactionsThunk.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    },

    [addTransactionThunk.fulfilled]: (state, action) => {
      state.isloading = false;
      state.transactions.unshift(action.payload.data);
    },
    [addTransactionThunk.pending]: (state, action) => {
      state.isloading = true;
    },
    [addTransactionThunk.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    },

    [deleteTransactionThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteTransactionThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteTransactionThunk.rejected]: (state, action) => {
      state.isLoading = false;
    },

    [editTransactionThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const index = state.transactions.findIndex(el => el._id === payload.data._id);

      state.transactions[index] = { ...payload.data };

      console.log(index, state.transactions[index].isArchived);
    },
    [editTransactionThunk.pending]: (state, action) => {},
    [editTransactionThunk.rejected]: (state, action) => {},
  },
});

export const transactionsReducer = transactionsSlice.reducer;
