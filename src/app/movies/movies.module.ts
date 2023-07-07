import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';

@NgModule({
  declarations: [
    SidenavComponent,
    MovieSearchComponent,
    MovieCardsComponent,
    MovieDescriptionComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [
    SidenavComponent
  ]
})
export class MoviesModule { }
