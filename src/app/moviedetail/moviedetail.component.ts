import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie/movie.service';
import { movieModel } from '../model/movie.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss'],
})
export class MoviedetailComponent implements OnInit {
  judul: string = '';
  sinopsis: string = '';
  poster: string = '';
  constructor(public ms: MovieService, public route: ActivatedRoute) {}

  ngOnInit() {
    var id: number = this.route.snapshot.params['id'];
    var mm: movieModel = this.ms.movieKu[id];
    this.judul = mm.judul;
    this.sinopsis = mm.sinopsis;
    this.poster = mm.poster;
  }
}
