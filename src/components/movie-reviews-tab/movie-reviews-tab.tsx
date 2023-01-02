import { useAppSelector } from '../../hooks';
import { getMovieReviews } from '../../store/movie-data/selectors';
import { formatDate } from '../../utils/utils';

function MovieReviewsTab() {
  const movieReviews = useAppSelector(getMovieReviews);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {movieReviews.length > 0 ? (
          movieReviews.map((review) => (
            <div key={review.id} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime={review.date.substring(0, 10)}>
                    {formatDate(review.date)}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rating}</div>
            </div>
          ))
        ) : (
          <p className="review">No comments yet</p>
        )}
      </div>
    </div>
  );
}

export default MovieReviewsTab;
