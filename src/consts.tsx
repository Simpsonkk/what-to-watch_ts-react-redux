export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Movie = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*'
}

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum APIRoute {
  Movies = '/films',
}

export enum NameSpace {
  Movies = 'movieData',
}
