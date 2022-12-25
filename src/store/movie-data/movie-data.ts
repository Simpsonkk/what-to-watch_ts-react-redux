import { NameSpace } from './../../consts';
import { FilmDataState } from './../../types/state.model';
import { MovieData } from './../../types/movie.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FilmDataState = {
  movieCatalog: [],
};

export const movieData = createSlice({
  name: NameSpace.Movies,
  initialState: initialState,
  reducers: {
    loadMovieCatalog: (state, action: PayloadAction<MovieData[]>) => {
      state.movieCatalog = action.payload;
    },
  },
});

export const { loadMovieCatalog } = movieData.actions;
