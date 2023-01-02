import { MovieData } from '../../types/movie.model';
import MovieCard from '../movie-card/movie-card';

type SimilarMoviesProps = {
  similarMovies: MovieData[];
};

function SimilarMovies({ similarMovies }: SimilarMoviesProps) {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {similarMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
}

export default SimilarMovies;
