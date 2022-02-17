import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { Observable } from 'rxjs';

@Injectable()
export class ExampleService extends HttpService {
  constructor(private http: HttpClient) {
    super();
  }

  fetchData(): Observable<any> {
    const url = `fake-url`;
    return this.http.get<string>(url, this.getRequestOptions());
  }

  saveData(updates: { [key: string]: any }): Observable<any> {
    const url = `fake-url`;
    return this.http.patch(url, updates, this.getRequestOptions());
  }
}
