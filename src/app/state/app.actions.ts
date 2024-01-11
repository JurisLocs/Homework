import { createAction } from '@ngrx/store';

export const addItem = createAction('[Items] Add Item', (item: string) => ({ item }));
export const removeItem = createAction('[Items] Remove Item', (index: number) => ({ index }));
