import { MovieData } from './../types/movie.model';

export const filterMovie = (movies: MovieData[], genre: string) =>
  movies.filter((movie: MovieData) => movie.genre === genre);

export const formatMovieRunTime = (time: number): string => {
  const hours = Math.floor(time / 60);
  const minutes = time - hours * 60;

  return `${hours}h ${minutes}m`;
};

export const formatDate = (date: string): string =>
  new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

export const formatRatingScore = (rating: number) => {
  switch (true) {
    case rating < 3:
      return 'Bad';
    case rating < 5:
      return 'Normal';
    case rating < 8:
      return 'Good';
    case rating < 10:
      return 'Very good';
    case rating === 10:
      return 'Awesome';
  }
};
