import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ReduxModule } from 'src/app/redux/redux.module';
import { ServicesModule } from 'src/app/services/services.module';

import { DotComponent } from './dot.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    ReduxModule,
    ServicesModule
  ],
  // schemas
  declarations: [DotComponent, HomeComponent, NotFoundComponent]
  // exports
  // entryComponents
})
export class ComponentsModule {}
