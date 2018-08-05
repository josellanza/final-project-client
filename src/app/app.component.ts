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

  handleSearchClick() {
    this.booksService.searchBook(this.book)
      .then((book) => {
      this.authService.storeBook(book);
      return this.book = book;
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

