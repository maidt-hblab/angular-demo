import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthorized = false;
  constructor( private http: HttpClient ) { }

  setAuth(value: boolean) {
    this.isAuthorized = value;
  }

  login(params: any) {
    return this.http.post('http://demo0274941.mockable.io/login', params);
  }

  register(params: any) {
    return this.http.post('http://demo0274941.mockable.io/register', params);
  }

}
