import { TestBed } from '@angular/core/testing';

import { BlogpostsService } from './blogposts.service';

describe('BlogpostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogpostsService = TestBed.get(BlogpostsService);
    expect(service).toBeTruthy();
  });
});
