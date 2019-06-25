import { TestBed } from '@angular/core/testing';

import { HttpTournamentService } from './http-tournament.service';

describe('HttpTournamentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpTournamentService = TestBed.get(HttpTournamentService);
    expect(service).toBeTruthy();
  });
});
