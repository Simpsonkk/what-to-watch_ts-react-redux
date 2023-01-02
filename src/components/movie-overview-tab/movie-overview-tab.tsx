import { MovieData } from '../../types/movie.model';
import { formatRatingScore } from '../../utils/utils';

type MovieOverviewTabProps = {
  currentMovie: MovieData;
};

function MovieOverviewTab({ currentMovie }: MovieOverviewTabProps) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{currentMovie.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{formatRatingScore(currentMovie.rating)}</span>
          <span className="film-rating__count">
            {currentMovie.scoresCount} ratings
          </span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{currentMovie.description}</p>
        <p className="film-card__director">
          <strong>Director: {currentMovie.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {currentMovie.starring.join(', ')} and other
          </strong>
        </p>
      </div>
    </>
  );
}

export default MovieOverviewTab;
