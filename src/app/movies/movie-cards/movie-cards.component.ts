import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss']
})
export class MovieCardsComponent implements OnInit {
  movie: string = '';
  date: string  = '';
  movies:any = [];
  notFoundMovie = false;
  constructor(
    public service : MovieService,
    private route: ActivatedRoute,
    private router:  Router
  ) {
    this.route
        .queryParams
        .subscribe(params => {
            this.movie = params['movieName'];
            this.date = params['movieDate'];
        });
   }

  ngOnInit(): void {
      const dateFormat = new Date(this.date).getFullYear();
      this.service.getPosts(this.movie, dateFormat).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Response === 'False') {
            this.notFoundMovie = true
          }else{
            if(Array.isArray(response)){
              response.forEach((e : any)=> {
                this.movies.push({
                  title: e?.Title,
                  year: e.Year,
                  img: e.Poster,
                  rating:e.Rating,
                  plot:e.Plot,
                  id: e.imdbID
                })
              });
            }else{
              this.movies.push({
                  title: response?.Title,
                  year: response.Year,
                  img: response.Poster,
                  rating:response.Rating,
                  plot: response.Plot,
                  id: response.imdbID
              });
            }
          }
          
          
        },
        (error) => { this.notFoundMovie = true});
  }

  seeMovie(id:string){
    this.router.navigate(['/movie'],{queryParams: {idMovie:id}});
  }

}
