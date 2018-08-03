import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl = 'https://www.googleapis.com/books/v1/volumes?q={search terms}';

  constructor(private httpClient: HttpClient) { }

  searchBook(username: string, password: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    const user = { username, password };
    return this.httpClient.post(`${this.baseUrl}/signup`, user, options)
      .toPromise()
      .then((data) => this.setUser(data));
  }
}
