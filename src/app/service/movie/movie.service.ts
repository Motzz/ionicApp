import { Injectable } from '@angular/core';
import { movieModel } from 'src/app/model/movie.model';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieKu: movieModel[] = [
    new movieModel(
      'Avenger Infinity War',
      'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality.',
      'https://ubaya.fun/images/1.jpg'
    ),
    new movieModel(
      'Joker',
      'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks --       the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he is part of the world around him. ',
      'https://ubaya.fun/images/2.jpg'
    ),
    new movieModel(
      'OnWard',
      'Teenage elf brothers Ian and Barley embark on a magical quest to spend one more day with their late father.        Like any good adventure, their journey is filled with cryptic maps, impossible obstacles and unimaginable discoveries.',
      'https://ubaya.fun/images/3.jpg'
    ),
    new movieModel(
      'Knives Out',
      'The circumstances surrounding the death of crime novelist Harlan Thrombey are mysterious, but there is one thing that renowned Detective Benoit Blanc knows for sure -- everyone in the wildly dysfunctional Thrombey family is a suspect. ',
      'https://ubaya.fun/images/4.jpg'
    ),
    new movieModel(
      'Mulan',
      'A young Chinese maiden disguises herself as a male warrior in order to save her father.',
      'https://ubaya.fun/images/5.jpg'
    ),
  ];
  constructor() {}
}
