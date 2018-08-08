import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  books: any;

  constructor(private booksService: BooksService ) { }

  ngOnInit() {
    this.booksService.getBooks()
    .then ((data) => {
      this.books = data;
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleLinkClick(book) {
    this.booksService.sharedData = book;
  }
}

