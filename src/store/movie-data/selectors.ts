import { NameSpace } from './../../consts';
import { MovieData } from './../../types/movie.model';
import { State } from './../../types/state.model';

export const getMovieCatalog = (state: State): MovieData[] => state[NameSpace.Movies].movieCatalog;
export const getPromoMovie = (state: State): MovieData | null => state[NameSpace.Movies].promoMovie;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Movies].isDataLoaded;
export const getCurrentMovie = (state: State): MovieData | null => state[NameSpace.Movies].selectedMovie;
