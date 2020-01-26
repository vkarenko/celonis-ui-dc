import { Component, OnInit, Input } from '@angular/core';
import { ArticleResponce, WikiArticlesService } from 'src/app/_services/wiki-articles.service';

class ArticleSection {
  title: string;
  text: string;
}

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent implements OnInit {

  @Input() sectionId: string;

  private _section = new ArticleSection();

  constructor(
    private wikiArticles: WikiArticlesService
  ) { }

  ngOnInit() {
    this.wikiArticles.getArticle('pizza', this.sectionId).subscribe(
      (responce: ArticleResponce) => this.parseDataFromWiki(responce)
    );
  }

  parseDataFromWiki(data: ArticleResponce) {
    const section: ArticleSection = {
      title: data.parse.title,
      text: data.parse.text['*']
    }

    this.section = section;
  }

  set section(article: ArticleSection) {
    this._section = article;
  }

  get section(): ArticleSection {
    return this._section;
  }

}
