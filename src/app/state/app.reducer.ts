import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem } from './app.actions';
import * as AppActions from './app.actions';

export const initialState: string[] = [];

export const itemsReducer = createReducer(
  initialState,
  on(AppActions.addItem, (state, { item }) => [...state, item]),
  on(AppActions.removeItem, (state, { index }) => state.filter((_, i) => i !== index))
);