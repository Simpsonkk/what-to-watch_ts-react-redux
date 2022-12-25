import Footer from '../footer/footer';
import MovieCatalog from '../movie-catalog/movie-catalog';
import MovieGenres from '../movie-genres/movie-genres';
import PromoMovie from '../promo-movie/promo-movie';

function MainPage() {
  return (
    <>
      <PromoMovie />
      <div className="page-content">
        <section className="catalog">
          {/* <h2 className="catalog__title visually-hidden">Catalog</h2> */}
          <MovieGenres />
          <MovieCatalog />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
