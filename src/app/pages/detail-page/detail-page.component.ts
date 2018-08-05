import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  @Input()
  book: any;

  constructor() { }

  ngOnInit() {
  }

}
