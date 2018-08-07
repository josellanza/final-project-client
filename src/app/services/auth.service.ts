import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private user: any;
  private userChange: Subject<any> = new Subject();

  private apiUrl = environment.apiUrl + '/auth';

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
    return this.httpClient.get(`${this.apiUrl}/me`, options)
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
    return this.httpClient.post(`${this.apiUrl}/signup`, user, options)
      .toPromise()
      .then((data) => this.setUser(data));
  }

  login(username: string, password: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    const user = { username, password };
    return this.httpClient.post(`${this.apiUrl}/login`, user, options)
      .toPromise()
      .then((data) => this.setUser(data));
  }

  logout() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.apiUrl}/logout`, options)
      .toPromise()
      .then((data) => this.setUser(data));
   }

   getUser(): any {
    return this.user;
  }

}
