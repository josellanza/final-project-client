import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loading = true;
  loadingBook = true;
  anon: boolean;
  user: any;
  book: any;

  constructor(private authService: AuthService, private booksService: BooksService,  private router: Router) {}

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.loading = false;
      this.user = user;
      this.anon = !user;
    });
  }

  handleSearchClick(search) {
    this.loadingBook = false;
    this.booksService.searchBook(search)
      .then((book) => {
      return this.booksService.storeBook(book)
      .then((data) => {
        this.book = data;
        this.booksService.sharedData = this.book;
        this.router.navigate(['/book', this.book._id]);
        })
        .catch((err) => {
          console.log(err);
        });
    })
      .catch((err) => {
        console.log(err);
      });
  }
  logout() {
    this.authService.logout()
      .then((result) => {
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

