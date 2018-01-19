import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/Http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
api_key: string;
moviesp: any;
  constructor(private _http: Http) {    console.log('Github Service ready');
this.api_key = '8a0197a164cc9b626bbee3d7613622de';
}

// tslint:disable-next-line:one-line
getPopular(){
 return this._http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + this.api_key)
 .map(res => res.json());
}

getBestInYear() {
  // tslint:disable-next-line:max-line-length
  return this._http.get('https://api.themoviedb.org/3/discover/movie?primary_release_year=2017&sort_by=vote_average.desc&api_key=' + this.api_key)
 .map(res => res.json());
}

// tslint:disable-next-line:one-line
getInTheatres(){
// tslint:disable-next-line:max-line-length
return this._http.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2017-12-15&primary_release_date.lte=2018-01-15?&api_key=' + this.api_key)
.map(res => res.json());
}
}
