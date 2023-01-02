import { Comment } from './../../types/comment.model';
import { AppDispatch } from './../../types/state.model';
import { AxiosInstance } from 'axios';
import { errorHandler } from './../../services/errorHandler';
import { APIRoute } from './../../consts';
import { MovieData } from './../../types/movie.model';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loadMovieCatalog,
  loadMovieReviews,
  loadPromoMovie,
  loadSelectedMovie,
  loadSimilarMovies
} from '../movie-data/movie-data';

export const fetchMovieCatalogAction = createAsyncThunk<
  void,
  undefined,
  { extra: { api: AxiosInstance }; dispatch: AppDispatch }
>('MovieData/fetchMovieCatalog', async (_, { extra, dispatch }) => {
  const { api } = extra;
  try {
    const { data } = await api.get<MovieData[]>(APIRoute.Movies);
    dispatch(loadMovieCatalog(data));
  } catch (error) {
    errorHandler(error);
  }
});

export const fetchPromoMovieAction = createAsyncThunk<
  void,
  undefined,
  { extra: { api: AxiosInstance }; dispatch: AppDispatch }
>('MovieData/fetchPromoMovie', async (_, { extra, dispatch }) => {
  const { api } = extra;
  try {
    const { data } = await api.get<MovieData>(APIRoute.Promo);
    dispatch(loadPromoMovie(data));
  } catch (error) {
    errorHandler(error);
  }
});

export const fetchSelectedMovieAction = createAsyncThunk<
  void,
  string | undefined,
  { extra: { api: AxiosInstance }; dispatch: AppDispatch }
>('MovieData/selectedMovie', async (movieId, { extra, dispatch }) => {
  const { api } = extra;
  try {
    const { data } = await api.get<MovieData>(`${APIRoute.Movies}/${movieId}`);
    dispatch(loadSelectedMovie(data));
  } catch (error) {
    errorHandler(error);
  }
});

export const fetchMovieReviewsAction = createAsyncThunk<
  void,
  string | undefined,
  { extra: { api: AxiosInstance }; dispatch: AppDispatch }
>('MovieData/movieReviews', async (movieId, { extra, dispatch }) => {
  const { api } = extra;
  try {
    const { data } = await api.get<Comment[]>(
      `${APIRoute.Comments}/${movieId}`,
    );
    dispatch(loadMovieReviews(data));
  } catch (error) {
    errorHandler(error);
  }
});

export const fetchSimilarMovies = createAsyncThunk<
  void,
  string | undefined,
  { extra: { api: AxiosInstance }; dispatch: AppDispatch }
>('MovieData/similarMovies', async (movieId, { extra, dispatch }) => {
  const { api } = extra;
  try {
    const { data } = await api.get<MovieData[]>(
      `${APIRoute.Movies}/${movieId}${APIRoute.SimilarMovies}`,
    );
    dispatch(loadSimilarMovies(data));
  } catch (error) {
    errorHandler(error);
  }
});
