import { useState } from 'react';
import { DEFAULT_GENRE, INITIAL_MOVIE_AMOUNT } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getMovieCatalog } from '../../store/movie-data/selectors';
import { filterMovie } from '../../utils/utils';
import MovieCard from '../movie-card/movie-card';
import MovieGenres from '../movie-genres/movie-genres';

function MovieCatalog() {
  const [movieAmount, setMovieAmount] = useState<number>(INITIAL_MOVIE_AMOUNT);
  const [genre, setGenre] = useState<string>(DEFAULT_GENRE);
  const movies = useAppSelector(getMovieCatalog);

  const filteredMovie =
    genre === DEFAULT_GENRE ? movies : filterMovie(movies, genre);

  const getCurrentGenre = (currentGenre: string): void => {
    setGenre(currentGenre);
    setMovieAmount(INITIAL_MOVIE_AMOUNT);
  };

  return (
    <>
      <MovieGenres getCurrentGenre={getCurrentGenre} currentGenre={genre} />
      <div className="catalog__films-list">
        {filteredMovie
          .map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))
          .slice(0, movieAmount)}
      </div>
      <div
        className={
          movieAmount < filteredMovie.length
            ? 'catalog__more'
            : 'visually-hidden'
        }
      >
        <button
          onClick={() => setMovieAmount((prev) => prev + 8)}
          className="catalog__button"
          type="button"
        >
          Show more
        </button>
      </div>
    </>
  );
}

export default MovieCatalog;
