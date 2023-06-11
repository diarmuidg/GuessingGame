import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GuessingGridComponent } from './guessing-grid/guessing-grid.component';
import { NameGridComponent } from './name-grid/name-grid.component';
import { WhereInTheWorldComponent } from './where-in-the-world/where-in-the-world.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: 'guessing-grid', component: GuessingGridComponent }, 
  { path: 'name-grid', component: NameGridComponent }, 
  { path: 'where-in-the-world', component: WhereInTheWorldComponent }, 
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
