import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { APIRoute } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  changeFavoriteMovieAction,
  fetchMovieReviewsAction,
  fetchSelectedMovieAction,
  fetchSimilarMovies
} from '../../store/actions/api-actions';
import {
  getCurrentMovie,
  getSimilarMovies
} from '../../store/slices/movie-data/selectors';
import BackgroundImg from '../background-img/background-img';
import SimilarMovies from '../similar-movies/similar-movies';
import Footer from '../footer/footer';
import Header from '../header/header';
import Loader from '../loader/loader';
import MovieDescription from '../movie-description/movie-description';

function MoviePage() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentMovie = useAppSelector(getCurrentMovie);
  const similarMovies = useAppSelector(getSimilarMovies);

  useEffect(() => {
    dispatch(fetchSelectedMovieAction(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    dispatch(fetchSimilarMovies(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    dispatch(fetchMovieReviewsAction(params.id));
  }, [dispatch, params.id]);

  const changeFavoriteMovie = () => {
    dispatch(
      changeFavoriteMovieAction({
        movieId: currentMovie!.id,
        isFavorite: Number(!currentMovie!.isFavorite),
      }),
    );
  };

  if (!currentMovie) {
    return <Loader />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <BackgroundImg
            movieImg={currentMovie.backgroundImage}
            movieTitle={currentMovie.name}
          />
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentMovie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentMovie.genre}</span>
                <span className="film-card__year">{currentMovie.released}</span>
              </p>
              <div className="film-card__buttons">
                <button
                  onClick={() => navigate(`${APIRoute.Player}/${params.id}`)}
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  onClick={changeFavoriteMovie}
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref={currentMovie.isFavorite ? '#in-list' : '#add'}></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link
                  to={`${APIRoute.Movies}/${currentMovie.id}${APIRoute.Review}`}
                  className="btn film-card__button"
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={currentMovie.posterImage}
                alt={currentMovie.name}
                width="218"
                height="327"
              />
            </div>
            <MovieDescription currentMovie={currentMovie} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <SimilarMovies similarMovies={similarMovies.slice(0, 4)} />
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
