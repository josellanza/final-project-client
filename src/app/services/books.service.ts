import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl = 'https://www.googleapis.com/books/v1/volumes'; // ?q={search terms}';

  constructor(private httpClient: HttpClient) { }

  searchBook(book): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/?q=` + book, options)
      .toPromise();
  }
}
