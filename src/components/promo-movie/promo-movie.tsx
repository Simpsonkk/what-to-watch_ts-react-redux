import { useNavigate } from 'react-router-dom';
import { APIRoute } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteMovieAction } from '../../store/actions/api-actions';
import { getCurrentMovie } from '../../store/slices/movie-data/selectors';
import BackgroundImg from '../background-img/background-img';
import Header from '../header/header';

function PromoMovie() {
  const promoBackground = useAppSelector(getCurrentMovie);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const changeFavoriteMovie = () => {
    dispatch(
      changeFavoriteMovieAction({
        movieId: promoBackground!.id,
        isFavorite: Number(!promoBackground!.isFavorite),
      }),
    );
  };

  return (
    <section className="film-card">
      <BackgroundImg
        movieImg={promoBackground!.backgroundImage}
        movieTitle={promoBackground!.name}
      />
      <h1 className="visually-hidden">WTW</h1>
      <Header />
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={promoBackground!.posterImage}
              alt={promoBackground!.name}
              width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoBackground!.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoBackground!.genre}</span>
              <span className="film-card__year">{promoBackground!.released}</span>
            </p>

            <div className="film-card__buttons">
              <button
                onClick={() =>
                  navigate(`${APIRoute.Player}/${promoBackground!.id}`)}
                className="btn btn--play film-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button onClick={changeFavoriteMovie} className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref={promoBackground!.isFavorite ? '#in-list' : '#add'}></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoMovie;
