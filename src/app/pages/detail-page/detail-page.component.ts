import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';


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

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.loading = false;
      this.user = user;
      this.anon = !user;
    });
  }

}
