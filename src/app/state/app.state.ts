import { ActionReducerMap } from '@ngrx/store';
import { itemsReducer } from './app.reducer';

export interface AppState {
    items: string[]
}

export const reducers: ActionReducerMap<AppState> = {
    items: itemsReducer,
};
