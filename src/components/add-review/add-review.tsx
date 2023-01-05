import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSelectedMovieAction } from '../../store/actions/api-actions';
import { getCurrentMovie } from '../../store/slices/movie-data/selectors';
import BackgroundImg from '../background-img/background-img';
import Loader from '../loader/loader';
import Header from '../header/header';
import AddReviewForm from './add-review-form/add-review-form';

function AddReview() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const currentMovie = useAppSelector(getCurrentMovie);

  useEffect(() => {
    dispatch(fetchSelectedMovieAction(params.id));
  }, [dispatch, params.id]);

  if (!currentMovie) {
    return <Loader />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <BackgroundImg
          movieImg={currentMovie.backgroundImage}
          movieTitle={currentMovie.name}
        />
        <h1 className="visually-hidden">WTW</h1>
        <Header breadCrumbs/>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={currentMovie.posterImage}
            alt={currentMovie.name}
            width="218"
            height="327"
          />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
}

export default AddReview;
