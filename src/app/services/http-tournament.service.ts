import { Injectable } from '@angular/core';
import { TournamentService } from './tournament.service';
import { Observable, throwError } from 'rxjs';
import { Tournament } from '../model/tournament';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpTournamentService extends TournamentService {
  
  getTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.tournamentsUrl).pipe(
      catchError(
        this.handleError
      )
    )
  }

  constructor(private http: HttpClient) { 
    super();
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return throwError(error);
  }
}
