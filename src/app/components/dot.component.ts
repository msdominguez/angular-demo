import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dot',
  template: ``,
  styles: [`
    :host {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #000;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DotComponent {
  constructor() {}
}
