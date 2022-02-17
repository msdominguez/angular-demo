import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor() {}

  protected getRequestOptions() {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return { headers };
  }
}
