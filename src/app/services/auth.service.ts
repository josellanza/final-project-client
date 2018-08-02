import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/auth';

  constructor(private httpClient: HttpClient) { }

  signup(username: string, password: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    const data = { username, password };
    return this.httpClient.post(`${this.baseUrl}/signup`, data, options)
      .toPromise();
  }
  login(username: string, password: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    const data = { username, password };
    return this.httpClient.post(`${this.baseUrl}/login`, data, options)
      .toPromise();
  }
  logout() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/logout`, options)
      .toPromise();
   }
}
