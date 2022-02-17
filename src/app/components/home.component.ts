import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeAdapter } from 'src/app/redux/home/adapter';

import { Person } from 'src/app/models';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h1>{{ headerText$ | async }}</h1>
      <h2>{{ timestamp$ | async }}</h2>
      <h2>Click Count: {{ count$ | async }}</h2>
      <button (click)="onButtonClick()">click me</button>
      <app-dot></app-dot>
    </div>

    <div>
      <h1>People</h1>
      <div *ngFor="let person of people$ | async">
        <label>{{ person.name }}</label>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: pink;
        text-align: center;
        font-family: Arial;
        height: 100vh;
        width: 100%;
        overflow: hidden;
      }

      button {
        cursor: pointer;
        padding: 1rem;
        font-size: 14px;
        border-radius: 50px;
        color: #fff;
        border: none;
        background: linear-gradient(
          90deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(85, 9, 121, 1) 0%,
          rgba(255, 0, 204, 1) 100%
        );
        margin-bottom: 1rem;
      }

      button:hover {
        box-shadow: 0px 0px 5px 0 rgba(205, 0, 164, 1);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  headerText$: Observable<string>;
  count$: Observable<number>;
  people$: Observable<Person[]>;
  timestamp$: Observable<string>;

  constructor(private homeAdapter: HomeAdapter) {}

  ngOnInit() {
    this.headerText$ = this.homeAdapter.getHeaderText();
    this.count$ = this.homeAdapter.getCount();
    this.people$ = this.homeAdapter.getPeople();
    this.timestamp$ = this.homeAdapter.getTimeStamp();
  }

  onButtonClick() {
    this.homeAdapter.updateHeaderText('What is guccciii');
  }
}
