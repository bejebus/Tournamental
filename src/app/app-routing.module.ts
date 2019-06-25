import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentTableComponent } from './tournament-table/tournament-table.component';

const routes: Routes = [
  { path: 'tournaments', component: TournamentTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
