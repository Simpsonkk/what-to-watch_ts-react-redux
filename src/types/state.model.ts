import { store } from './../store/store';
import { MovieData } from './movie.model';

export type FilmDataState = {
  movieCatalog: MovieData[],
  promoMovie: MovieData | null,
  isDataLoaded: boolean,
  selectedMovie: MovieData | null,
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
