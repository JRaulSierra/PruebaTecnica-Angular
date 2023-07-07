import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
  movieSearch = new FormControl('');
  movieDate = new FormControl('');
  constructor(
    private route:  Router
  ) { }


  searchMovie(){
    const params = {
      movieName: this.movieSearch.value,
      movieDate: this.movieDate.value
    }
    this.route.navigate(['/movies'],{queryParams: params});
  }

}
