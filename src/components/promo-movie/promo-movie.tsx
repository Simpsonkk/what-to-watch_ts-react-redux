import { useNavigate } from 'react-router-dom';
import { APIRoute } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getPromoMovie } from '../../store/slices/movie-data/selectors';
import BackgroundImg from '../background-img/background-img';
import Header from '../header/header';

function PromoMovie() {
  const promoBackground = useAppSelector(getPromoMovie);
  const navigate = useNavigate();

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
              src="img/the-grand-budapest-hotel-poster.jpg"
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">The Grand Budapest Hotel</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">Drama</span>
              <span className="film-card__year">2014</span>
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
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
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
