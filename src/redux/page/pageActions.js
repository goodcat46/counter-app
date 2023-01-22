import { createAction } from '@reduxjs/toolkit';

export const actionSetPage = createAction('appPage/actionSetPage');
export const actionResetPageSettings = createAction('appPage/actionResetPageSettings');
export const actionSetIndexPage = createAction('appPage/actionSetIndexPage');
export const actionSetSearchParams = createAction('appPage/actionSetSearchParams');
export const actionSetPageGrid = createAction('appPage/actionSetPageGrid');
export const actionSetPageGridChange = createAction('appPage/actionSetPageGridChange');
export const actionSetDevice = createAction('appPage/actionSetDevice');

export const actionSetPageObjData = createAction('appPage/actionSetPageObjData');
