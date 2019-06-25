import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryTournamentService implements InMemoryDbService {
  createDb() {
    let tournaments = [
      { id: 1, name: 'Tournament 1', type: 'FFA Round Robin', game: 'Chaos Reborn' },
      { id: 2, name: 'Tournament 2', type: 'FFA Round Robin', game: 'Chaos: The Battle of The Wizards' }
    ];
    return {tournaments};
  }
}