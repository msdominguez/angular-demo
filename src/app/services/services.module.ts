import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ExampleService } from './example.service';
import { HttpService } from './http.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ExampleService, HttpService]
})
export class ServicesModule {}
