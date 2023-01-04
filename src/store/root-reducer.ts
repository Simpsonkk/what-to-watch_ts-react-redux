import { userProcess } from './slices/user-process/user-process';
import { movieData } from './slices/movie-data/movie-data';
import { NameSpace } from '../consts';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [NameSpace.Movies]: movieData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
