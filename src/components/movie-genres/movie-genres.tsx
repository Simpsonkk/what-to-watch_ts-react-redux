import { GENRES } from '../../consts';

type getCurrentGenre = {
  getCurrentGenre: (currentGenre: string) => void,
  currentGenre: string,
}

function MovieGenres({getCurrentGenre, currentGenre}: getCurrentGenre) {
  return (
    <ul className="catalog__genres-list">
      {GENRES.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${
            currentGenre === genre && 'catalog__genres-item--active'
          }`}
        >
          <a
            href="#"
            onClick={() => getCurrentGenre(genre)}
            className="catalog__genres-link"
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MovieGenres;
