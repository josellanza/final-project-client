import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BooksService } from '../../services/books.service';


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  anon: boolean;
  user: any;
  book: any;
  average: number;
  loadingDetail = true;

  constructor(private booksService: BooksService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.user = user;
      this.anon = !user;
      this.book = this.booksService.sharedData;
      this.loadingDetail = false;
    });

  }

  handleScoreClick(score) {
    this.booksService.addScore(this.book, score)
    .then((data) => {
      this.book = data;
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleCommentClick(comment) {
    this.booksService.addComment(this.book, comment)
      .then((data) => {
      this.book = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
