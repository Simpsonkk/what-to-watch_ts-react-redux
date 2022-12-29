import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../consts';

type MovieCardProps = {
  movieImg: string,
  movieTitle: string,
  movieId: number,
};

function MovieCard({ movieImg, movieTitle, movieId }: MovieCardProps) {
  const navigate = useNavigate();

  return (
    <article className="small-film-card catalog__films-card">
      <div
        onClick={() => navigate(`/films/${movieId}`)}
        className="small-film-card__image"
      >
        <img src={movieImg} alt={movieTitle} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Movie} className="small-film-card__link">
          {movieTitle}
        </Link>
      </h3>
    </article>
  );
}

export default MovieCard;
