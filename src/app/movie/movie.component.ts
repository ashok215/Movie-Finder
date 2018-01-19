import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  popularlist: Array<Object>;
  theatrelist: Array<Object>;
  movieinyear: Array<Object>;

  constructor(private _movieservice: MovieService) {
    // tslint:disable-next-line:no-unused-expression
    this._movieservice.getInTheatres().subscribe(r => { this.theatrelist = r.results  });
    this._movieservice.getPopular().subscribe(r => {this.popularlist = r.results } );
    this._movieservice.getBestInYear().subscribe(r => {this.movieinyear = r.results } );

  }

  ngOnInit() {
  }

}
