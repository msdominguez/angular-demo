import { Injectable } from '@angular/core';
import { createEffect, Actions as NgrxActions, ofType } from '@ngrx/effects';
import { map, withLatestFrom, filter, switchMap } from 'rxjs/operators';
import * as Actions from './actions';
import { HomeAdapter } from './adapter';

@Injectable()
export class HomeEffects {

// on update header text, also update count
updateCountWithHeaderText = createEffect(() =>
  this.actions$.pipe(
    ofType(Actions.updateHeaderText),
    map((_) => Actions.incrementCount())
  )
);

// if count is 5 then reset text and count
resetCountAndTextOnCount5 = createEffect(() =>
  this.actions$.pipe(
    ofType(Actions.updateHeaderText),
    map(({ text }) => text),
    withLatestFrom(this.homeAdapter.getCount()),
    filter(([text, count]: [string, number]) => count === 5),
    switchMap(([text, count]: [string, number]) => [
      Actions.resetHeaderText(),
      Actions.resetCount()
    ])
  )
);

constructor(private actions$: NgrxActions, private homeAdapter: HomeAdapter) {}
}
