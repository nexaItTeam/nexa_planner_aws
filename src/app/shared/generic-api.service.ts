import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GenericApiService {

  constructor(private http: HttpClient) {    
  }

  fetchData(url:string,body:any): Observable<any> {
    return this.http.post(url,body);
  }
}
