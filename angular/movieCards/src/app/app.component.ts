import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'movieCards';
  movies: any[];
  selectMovieIndex: number;

  searchQuery: string; // name of the movie ? 

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    // request movie info from api request
    this.movies = [];
  }

  selectMovie(index: number) {
    this.selectMovieIndex = index;
  }

  search() {
    this.movieService.getMovie(this.searchQuery).subscribe(
      (data) => {
        console.log(data)
        this.movies = data.results;
      },
      (error) => {
        console.error("ERROR retrieving movie: ", error)
      }
    )
  }

  searchSeries() {
    this.movieService.getSeries(this.searchQuery).subscribe(
      data => {
        this.movies = data.results;
      },
      error => {
        console.error(error)
      }
    )
  }

  searchCompany() {
    this.movieService.getCompany(this.searchQuery).subscribe(
      data => {
        this.movies = data.results;
      },
      error => {
        console.error(error);
      }
    )
  }
}
