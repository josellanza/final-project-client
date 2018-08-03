import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthService {

  private user: any;
  private userChange: Subject<any> = new Subject();

  private baseUrl = 'http://localhost:3000/auth';

  userChange$: Observable<any> = this.userChange.asObservable();

  constructor(private httpClient: HttpClient) { }

  private setUser(user?: any) {
    this.user = user;
    this.userChange.next(user);
    return user;
  }
  me(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/me`, options)
      .toPromise()
      .then((data) => this.setUser(data))
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
          return null;
        } else {
          Promise.reject(new Error('unexpected error'));
        }
      });
  }

  signup(username: string, password: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    const user = { username, password };
    return this.httpClient.post(`${this.baseUrl}/signup`, user, options)
      .toPromise()
      .then((data) => this.setUser(data));
  }

  login(username: string, password: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    const user = { username, password };
    return this.httpClient.post(`${this.baseUrl}/login`, user, options)
      .toPromise()
      .then((data) => this.setUser(data));
  }

  logout() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/logout`, options)
      .toPromise()
      .then((data) => this.setUser(data));
   }

   getUser(): any {
    return this.user;
  }
}
