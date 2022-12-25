import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../consts';

function MovieCard() {
  const navigate = useNavigate();

  return (
    <article className="small-film-card catalog__films-card">
      <div onClick={() => navigate(`/film/${111111111}`)} className="small-film-card__image">
        <img
          src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
          alt="Fantastic Beasts: The Crimes of Grindelwald"
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Movie} className="small-film-card__link">
              Fantastic Beasts: The Crimes of Grindelwald
        </Link>
      </h3>
    </article>
  );
}

export default MovieCard;
