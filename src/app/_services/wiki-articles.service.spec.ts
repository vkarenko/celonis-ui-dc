import { TestBed } from '@angular/core/testing';

import { WikiArticlesService } from './wiki-articles.service';

describe('WikiArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WikiArticlesService = TestBed.get(WikiArticlesService);
    expect(service).toBeTruthy();
  });
});
