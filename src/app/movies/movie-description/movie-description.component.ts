import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss']
})
export class MovieDescriptionComponent implements OnInit {

  id: string  = '';
  movie:any = {};
  constructor(
    public service : MovieService,
    private route: ActivatedRoute,
  ) {
    this.route
        .queryParams
        .subscribe(params => {
            this.id = params['idMovie'];
        });
   }

  ngOnInit(): void {
    this.service.getPostsById(this.id).subscribe(
      (response: any) => {
        console.log(response);
        this.movie = response
      },
      (error) => { console.log(error); });
  }

}
