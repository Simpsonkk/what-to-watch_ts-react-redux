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
  SimilarMovies = '/similar',
  Login = '/login',
  Logout = '/logout'
}

export enum NameSpace {
  Movies = 'movieData',
  User = 'userProcess'
}

export enum MovieTabs {
  Overview,
  Details,
  Reviews,
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
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
