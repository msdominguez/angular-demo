import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { ServicesModule } from 'src/app/services/services.module';

// import adapters, effects, reducers
import { HomeAdapter } from './home/adapter';
import { reducers as homeReducers, HOME_REDUCER_TOKEN } from './home/reducer';
import { HomeEffects } from './home/effects';

@NgModule({
  imports: [
    ServicesModule,
    StoreModule.forFeature('home', HOME_REDUCER_TOKEN),
    EffectsModule.forFeature([HomeEffects])
  ],
  providers: [
    { provide: HOME_REDUCER_TOKEN, useFactory: homeReducers },
    HomeAdapter
  ]
})
export class ReduxModule {}
