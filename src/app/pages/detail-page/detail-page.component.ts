import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BooksService } from '../../services/books.service';


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  loading = true;
  anon: boolean;
  user: any;
  @Input()
  book: any;
  average: number;

  constructor(private booksService: BooksService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.loading = false;
      this.user = user;
      this.anon = !user;
    });

  }

  handleAddClick(score) {
    this.booksService.addScore(this.book, score)
    .then((data) => {
      this.book = data;
    })
    .catch((err) => {
      console.log(err);
    });
  }

}
