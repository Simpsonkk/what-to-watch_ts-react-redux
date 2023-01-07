import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteMoviesAction } from '../../store/actions/api-actions';
import { getFavoriteMovies } from '../../store/slices/movie-data/selectors';
import Footer from '../footer/footer';
import Header from '../header/header';
import MovieCard from '../movie-card/movie-card';

function MyMovieList() {
  const dispatch = useAppDispatch();
  const favoriteMovies = useAppSelector(getFavoriteMovies);

  useEffect(() => {
    dispatch(fetchFavoriteMoviesAction());
  }, [dispatch]);

  return (
    <div className="user-page">
      <Header />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {favoriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MyMovieList;
