import { store } from './../store/store';
import { MovieData } from './movie.model';

export type FilmDataState = {
  movieCatalog: MovieData[],
  promoMovie: MovieData | null,
  isDataLoaded: boolean,
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
