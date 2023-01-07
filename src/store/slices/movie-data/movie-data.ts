import { CommentGet } from '../../../types/comment.model';
import { NameSpace } from '../../../consts';
import { MovieDataState } from '../../../types/state.model';
import { MovieData } from '../../../types/movie.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: MovieDataState = {
  movieCatalog: [],
  promoMovie: null,
  isDataLoaded: false,
  selectedMovie: null,
  movieReviews: [],
  similarMovies: [],
  favoriteMovies: [],
};

export const movieData = createSlice({
  name: NameSpace.Movies,
  initialState,
  reducers: {
    loadMovieCatalog: (state, action: PayloadAction<MovieData[]>) => {
      state.movieCatalog = action.payload;
      state.isDataLoaded = true;
    },
    loadPromoMovie: (state, action: PayloadAction<MovieData>) => {
      state.promoMovie = action.payload;
    },
    loadSelectedMovie: (state, action: PayloadAction<MovieData>) => {
      state.selectedMovie = action.payload;
    },
    loadMovieReviews: (state, action: PayloadAction<CommentGet[]>) => {
      state.movieReviews = action.payload;
    },
    loadSimilarMovies: (state, action: PayloadAction<MovieData[]>) => {
      state.similarMovies = action.payload;
    },
    loadFavoriteMovies: (state, action: PayloadAction<MovieData[]>) => {
      state.favoriteMovies = action.payload;
    },
  },
});

export const {
  loadMovieCatalog,
  loadPromoMovie,
  loadSelectedMovie,
  loadMovieReviews,
  loadSimilarMovies,
  loadFavoriteMovies,
} = movieData.actions;
