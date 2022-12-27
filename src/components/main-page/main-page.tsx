import Footer from '../footer/footer';
import MovieCatalog from '../movie-catalog/movie-catalog';
import PromoMovie from '../promo-movie/promo-movie';

function MainPage() {
  return (
    <>
      <PromoMovie />
      <div className="page-content">
        <section className="catalog">
          {/* <h2 className="catalog__title visually-hidden">Catalog</h2> */}
          <MovieCatalog />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
