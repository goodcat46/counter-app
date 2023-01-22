import { createSlice } from '@reduxjs/toolkit';

import {
  actionSetPage,
  actionSetDevice,
  actionSetIndexPage,
  actionSetPageGrid,
  actionSetSearchParams,
  actionSetPageGridChange,
  actionResetPageSettings,
  actionSetPageObjData,
} from './pageActions';

const initialState = {
  page: {
    title: '',
    parentPath: '',
    path: '',
    iconId: '',
  },
  indexPage: 'orders',
  pageObjData: null,
  searchParams: {
    product: null,
    order: null,
    refund: null,
  },
  pageGridChange: false,
  pageGrid: 'gridFirst',
  isMobile: false,
};

export const appPageSlice = createSlice({
  name: 'appPage',
  initialState,
  extraReducers: {
    [actionSetPage]: (state, action) => {
      state.page = action.payload;
    },
    [actionResetPageSettings]: (state, action) => {
      state = initialState;
    },
    [actionSetDevice]: (state, action) => {
      state.isMobile = action.payload;
    },
    [actionSetIndexPage]: (state, action) => {
      state.indexPage = action.payload;
    },
    [actionSetSearchParams]: (state, action) => {
      state.searchParams = { ...state.searchParams, ...action.payload };
    },
    [actionSetPageGrid]: (state, action) => {
      state.pageGrid = action.payload;
    },
    [actionSetPageGridChange]: (state, action) => {
      state.pageGridChange = action.payload;
    },
    [actionSetPageObjData]: (state, action) => {
      state.pageObjData = action.payload;
    },
  },
});

export const appPageReducer = appPageSlice.reducer;
