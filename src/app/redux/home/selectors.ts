import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './state';

import { PersonUtils } from 'src/app/utils';

// import { Selectors as OtherSelectors } from 'app/redux/...';

export const rootSelector = createFeatureSelector<State>('home');

const getHeaderText = createSelector(
  rootSelector,
  (state: State): string => state.headerText
);

const getCount = createSelector(
  rootSelector,
  (state: State): number => state.count
);

const getPeople = createSelector(
  getCount,
  PersonUtils.buildPeople
);

const getTimestamp = createSelector(
  rootSelector,
  (state: State): string => state.timestamp
);

export const Selectors = {
  getHeaderText,
  getCount,
  getPeople,
  getTimestamp
};
