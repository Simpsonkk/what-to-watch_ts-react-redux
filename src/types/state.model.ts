import { Comment } from './comment.model';
import { store } from './../store/store';
import { MovieData } from './movie.model';

export type MovieDataState = {
  movieCatalog: MovieData[];
  promoMovie: MovieData | null;
  isDataLoaded: boolean;
  selectedMovie: MovieData | null;
  movieReviews: Comment[];
  similarMovies: MovieData[];
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
