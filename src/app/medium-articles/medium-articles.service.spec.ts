import { TestBed } from '@angular/core/testing';

import { MediumArticlesService } from './medium-articles.service';

describe('MediumArticlesService', () => {
  let service: MediumArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediumArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
