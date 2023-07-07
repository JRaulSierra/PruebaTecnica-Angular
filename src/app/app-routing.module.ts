import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearchComponent } from './movies/movie-search/movie-search.component';
import { MovieCardsComponent } from './movies/movie-cards/movie-cards.component';
import { MovieDescriptionComponent } from './movies/movie-description/movie-description.component';

const routes: Routes = [
  { path: '', component: MovieSearchComponent },
  { path: 'movies', component: MovieCardsComponent },
  { path: 'movie/:id', component: MovieDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
