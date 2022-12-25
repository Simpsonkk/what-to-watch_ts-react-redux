import { useAppSelector } from '../../hooks';
import { getMovieCatalog } from '../../store/movie-data/selectors';
import MovieCard from '../movie-card/movie-card';

function MovieCatalog() {
  const movies = useAppSelector(getMovieCatalog);

  return (
    <div className="catalog__films-list">
      <MovieCard />

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/bohemian-rhapsody.jpg"
            alt="Bohemian Rhapsody"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  Bohemian Rhapsody
          </a>
        </h3>
      </article>

      {/* <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/macbeth.jpg"
            alt="Macbeth"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  Macbeth
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/aviator.jpg"
            alt="Aviator"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  Aviator
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/we-need-to-talk-about-kevin.jpg"
            alt="We need to talk about Kevin"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  We need to talk about Kevin
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/what-we-do-in-the-shadows.jpg"
            alt="What We Do in the Shadows"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  What We Do in the Shadows
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/revenant.jpg"
            alt="Revenant"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  Revenant
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/johnny-english.jpg"
            alt="Johnny English"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  Johnny English
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/shutter-island.jpg"
            alt="Shutter Island"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  Shutter Island
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/pulp-fiction.jpg"
            alt="Pulp Fiction"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  Pulp Fiction
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/no-country-for-old-men.jpg"
            alt="No Country for Old Men"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  No Country for Old Men
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/snatch.jpg"
            alt="Snatch"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  Snatch
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/moonrise-kingdom.jpg"
            alt="Moonrise Kingdom"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  Moonrise Kingdom
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/seven-years-in-tibet.jpg"
            alt="Seven Years in Tibet"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  Seven Years in Tibet
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/midnight-special.jpg"
            alt="Midnight Special"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  Midnight Special
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/war-of-the-worlds.jpg"
            alt="War of the Worlds"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  War of the Worlds
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/dardjeeling-limited.jpg"
            alt="Dardjeeling Limited"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  Dardjeeling Limited
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/orlando.jpg"
            alt="Orlando"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  Orlando
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/mindhunter.jpg"
            alt="Mindhunter"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  Mindhunter
          </a>
        </h3>
      </article>

      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img
            src="img/midnight-special.jpg"
            alt="Midnight Special"
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
                  Midnight Special
          </a>
        </h3>
      </article> */}
      <div className="catalog__more">
        <button className="catalog__button" type="button">
              Show more
        </button>
      </div>
    </div>
  );
}

export default MovieCatalog;
