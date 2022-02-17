import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

// import { CookieModule } from 'ngx-cookie';
// import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module'; // rename to routing?
import { AppComponent } from './app.component';
import { ComponentsModule } from 'src/app/components/components.module';
// import { InterceptorsModule } from 'app/interceptors.module';

// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    // BrowserAnimationsModule
    // CookieModule.forRoot()
    StoreModule.forRoot({
      router: routerReducer
    }),
    // Uncomment this to add debugging for Redux actions
    // StoreDevtoolsModule.instrument({
    // maxAge: 50
    // }),
    EffectsModule.forRoot([]),
    // ToastrModule.forRoot({
    // closeButton: true,
    // extendedTimeOut: 3000,
    // timeOut: 3000,
    // positionClass: 'toast-top-center'
    // }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  // schemas
  bootstrap: [AppComponent]
})
export class AppModule {}
