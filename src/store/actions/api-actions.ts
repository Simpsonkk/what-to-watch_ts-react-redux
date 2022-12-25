import { AppDispatch } from './../../types/state.model';
import { AxiosInstance } from 'axios';
import { errorHandler } from './../../services/errorHandler';
import { APIRoute } from './../../consts';
import { MovieData } from './../../types/movie.model';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadMovieCatalog } from '../movie-data/movie-data';

export const fetchMovieCatalogAction = createAsyncThunk<
  void,
  undefined,
  { extra: { api: AxiosInstance }, dispatch: AppDispatch }
>('MovieData/fetchMovieCatalog', async (_, { extra, dispatch }) => {
  const { api } = extra;
  try {
    const { data } = await api.get<MovieData[]>(APIRoute.Movies);
    dispatch(loadMovieCatalog(data));
  } catch (error) {
    errorHandler(error);
  }
});
