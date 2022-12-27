import { MovieData } from './../types/movie.model';

export const filterMovie = (movies: MovieData[], genre: string) =>
  movies.filter((movie) => movie.genre === genre);
