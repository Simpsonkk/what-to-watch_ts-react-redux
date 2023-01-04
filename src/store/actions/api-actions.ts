import { saveUserAvatarUrl, removeUserAvatarUrl } from './../../services/user-avatar-url';
import { AuthInfo } from './../../types/auth-info.model';
import { saveToken, removeToken } from './../../services/token';
import { UserData } from './../../types/user.model';
import { Comment } from './../../types/comment.model';
import { AppDispatch } from './../../types/state.model';
import { AxiosInstance } from 'axios';
import { errorHandler } from './../../services/errorHandler';
import { APIRoute, AuthorizationStatus } from './../../consts';
import { MovieData } from './../../types/movie.model';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loadMovieCatalog,
  loadMovieReviews,
  loadPromoMovie,
  loadSelectedMovie,
  loadSimilarMovies
} from '../slices/movie-data/movie-data';
import { loadAuthorizationStatus } from '../slices/user-process/user-process';

export const fetchMovieCatalogAction = createAsyncThunk<
  void,
  undefined,
  { extra: { api: AxiosInstance }; dispatch: AppDispatch }
>('movieData/fetchMovieCatalog', async (_, { extra: { api }, dispatch }) => {
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
>('movieData/fetchPromoMovie', async (_, { extra: { api }, dispatch }) => {
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
>('movieData/selectedMovie', async (movieId, { extra: { api }, dispatch }) => {
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
>('movieData/movieReviews', async (movieId, { extra: { api }, dispatch }) => {
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
>('movieData/similarMovies', async (movieId, { extra: { api }, dispatch }) => {
  try {
    const { data } = await api.get<MovieData[]>(
      `${APIRoute.Movies}/${movieId}${APIRoute.SimilarMovies}`,
    );
    dispatch(loadSimilarMovies(data));
  } catch (error) {
    errorHandler(error);
  }
});

export const loginAction = createAsyncThunk<
  void,
  UserData,
  { extra: { api: AxiosInstance }; dispatch: AppDispatch }
>('userProcess/login', async ({email, password}, { extra: {api}, dispatch }) => {
  try {
    const { data } = await api.post<AuthInfo>(APIRoute.Login, {email, password});
    saveUserAvatarUrl(data.avatarUrl);
    saveToken(data.token);
    dispatch(loadAuthorizationStatus(AuthorizationStatus.Auth));
  } catch (error) {
    dispatch(loadAuthorizationStatus(AuthorizationStatus.NoAuth));
    errorHandler(error);
  }
});

export const checkAuthStatusAction = createAsyncThunk<
  void,
  undefined,
  { extra: { api: AxiosInstance }; dispatch: AppDispatch }
>('userProcess/checkAuthStatus', async (_, { extra: {api}, dispatch }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(loadAuthorizationStatus(AuthorizationStatus.Auth));
  } catch (error) {
    dispatch(loadAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  { extra: { api: AxiosInstance }; dispatch: AppDispatch }
>('userProcess/logout', async (_, { extra: {api}, dispatch }) => {
  try {
    await api.delete(APIRoute.Logout);
    removeToken();
    removeUserAvatarUrl();
    dispatch(loadAuthorizationStatus(AuthorizationStatus.NoAuth));
  } catch (error) {
    errorHandler(error);
  }
});
