import { createAction, props } from '@ngrx/store';

export const updateHeaderText = createAction('[home] update header text', props<{ text: string }>());
export const incrementCount = createAction('[home] increment count');
export const resetHeaderText = createAction('[home] reset header text');
export const resetCount = createAction('[home] reset count');
