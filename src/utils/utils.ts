import { MovieData } from './../types/movie.model';

export const filterMovie = (movies: MovieData[], genre: string) =>
  movies.filter((movie) => movie.genre === genre);

export const formatMovieRunTime = (time: number) => {
  const hours = Math.floor(time / 60);
  const minutes = time - hours * 60;

  return `${hours}h ${minutes}m`;
};
