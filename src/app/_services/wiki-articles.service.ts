import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ArticleResponce {

  parse: ArticleResponceStructure

}

interface ArticleResponceStructure {

  text: {
    '*': string;
  };

  title: string;

}

@Injectable({
  providedIn: 'root'
})
export class WikiArticlesService {

  constructor(
    private http: HttpClient
  ) { }

  getArticle(page: string, section?: string): Observable<any> {
    const url = 'https://en.wikipedia.org/w/api.php?';

    let params = new HttpParams()
      .set('origin', '*')
      .set('action', 'parse')
      .set('prop', 'text|sections')
      .set('page', page)
      .set('mainpage', 'true')
      .set('format', 'json');

      if (section) {
        params = params.append('section', section)
      }

    return this.http.get(url + params);
  }

}
