export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Movie = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*',
}

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum APIRoute {
  Movies = '/films',
  Promo = '/promo',
  Comments = '/comments',
  SimilarMovies = '/similar'
}

export enum NameSpace {
  Movies = 'movieData',
}

export enum MovieTabs {
  Overview,
  Details,
  Reviews,
}

export const DEFAULT_GENRE = 'All genres';

export const GENRES = [
  DEFAULT_GENRE,
  'Adventure',
  'Crime',
  'Drama',
  'Fantasy',
  'Action',
  'Comedy',
  'Thriller',
];

export const INITIAL_MOVIE_AMOUNT = 8;
