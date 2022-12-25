import { movieData } from './../movie-data/movie-data';
import { NameSpace } from './../../consts';
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [NameSpace.Movies]: movieData.reducer,
});
