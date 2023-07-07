import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class MoviesModule { }
