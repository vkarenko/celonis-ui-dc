import { Component, OnInit } from '@angular/core';
import { WikiArticlesService, ArticleResponce } from 'src/app/_services/wiki-articles.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
