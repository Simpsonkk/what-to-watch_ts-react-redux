import { AuthorizationStatus } from './../consts';
import { CommentGet } from './comment.model';
import { store } from './../store/store';
import { MovieData } from './movie.model';

export type MovieDataState = {
  movieCatalog: MovieData[];
  promoMovie: MovieData | null;
  isDataLoaded: boolean;
  selectedMovie: MovieData | null;
  movieReviews: CommentGet[];
  similarMovies: MovieData[];
};

export type UserProcessState = {
  AuthorizationStatus: AuthorizationStatus
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
