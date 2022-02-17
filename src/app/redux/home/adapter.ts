import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from './state';
import * as Actions from './actions';
import { Selectors } from './selectors';

import { Person } from 'src/app/models';

@Injectable()
export class HomeAdapter {
  constructor(private store: Store<State>) {}

  getHeaderText(): Observable<string> {
    return this.store.pipe(select(Selectors.getHeaderText));
  }

  getCount(): Observable<number> {
    return this.store.pipe(select(Selectors.getCount));
  }

  getPeople(): Observable<Person[]> {
    return this.store.pipe(select(Selectors.getPeople));
  }

  getTimeStamp(): Observable<string> {
    return this.store.pipe(select(Selectors.getTimestamp));
  }

  updateHeaderText(text: string): void {
    this.store.dispatch(Actions.updateHeaderText({ text }));
  }
}
