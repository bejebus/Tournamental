import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournament } from '../model/tournament';

export abstract class TournamentService {

  tournamentsUrl = "api/tournaments";

  abstract getTournaments() : Observable<Tournament[]>;

  constructor() { }
}
