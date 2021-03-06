import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class BooksService {

  sharedData = null;

  private baseUrl = 'https://www.googleapis.com/books/v1/volumes/?q='; // ?q=little prince

  private apiUrl = environment.apiUrl + '/book';

  constructor(private httpClient: HttpClient) { }

  searchBook(book: any): Promise<any> {

    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/` + book, options)
    .toPromise();
  }

  storeBook(book: any): Promise<any> {

    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.apiUrl}/add`, book, options)
    .toPromise();
  }

  getBooks(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.apiUrl}/get`, options)
    .toPromise();

  }

  addScore(book: any, score: number): Promise<any>  {
    const options = {
      withCredentials: true
    };

    const data = {
      book,
      score
    };

    return this.httpClient.post(`${this.apiUrl}/score`, data,  options)
    .toPromise();
  }

  addComment(book: any, comment: string): Promise<any>  {
    const options = {
      withCredentials: true
    };

    const data = {
      book,
      comment
    };

    return this.httpClient.post(`${this.apiUrl}/comment`, data,  options)
    .toPromise();
  }
}
