import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie/movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor(public ms: MovieService) {}

  show: boolean[] = [false];
  movie = [];
  ngOnInit() {
    this.movie = this.ms.movieKu; //ambil dari nama movie service
  }
}
