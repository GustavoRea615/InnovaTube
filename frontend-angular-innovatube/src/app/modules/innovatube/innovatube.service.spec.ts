import { TestBed } from '@angular/core/testing';

import { InnovatubeService } from './innovatube.service';

describe('InnovatubeService', () => {
  let service: InnovatubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InnovatubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
