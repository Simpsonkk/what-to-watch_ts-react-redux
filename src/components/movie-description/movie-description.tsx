// import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';
// import MovieReviews from '../movie-reviews/movie-reviews';

function MovieDescription() {
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <a href="#" className="film-nav__link">
              Overview
            </a>
          </li>
          <li className="film-nav__item">
            <a href="#" className="film-nav__link">
              Details
            </a>
          </li>
          <li className="film-nav__item">
            <a href="#" className="film-nav__link">
              Reviews
            </a>
          </li>
        </ul>
      </nav>

      <div className="film-rating">
        <div className="film-rating__score">8,9</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>
      <MovieOverview />
      {/* <MovieDetails /> */}
      {/* <MovieReviews /> */}
    </div>
  );
}

export default MovieDescription;
