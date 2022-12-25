import { NameSpace } from './../../consts';
import { MovieData } from './../../types/movie.model';
import { State } from './../../types/state.model';

export const getMovieCatalog = (state: State): MovieData[] => state[NameSpace.Movies].movieCatalog;
