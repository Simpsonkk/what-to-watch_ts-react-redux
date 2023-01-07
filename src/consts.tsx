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
  Logout = '/logout',
  Favorite = '/favorite',
  Review = '/review',
  Player = '/player',
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

export const RATING_STARS = new Array(10).fill(null).map((_, i) => i + 1).reverse();

export const MIN_COMMENT_LENGTH = 40;

export const MAX_COMMENT_LENGTH = 400;
