import { useState } from 'react';
import { MovieTabs } from '../../consts';
import { MovieData } from '../../types/movie.model';
import MovieDetailsTab from '../movie-details-tab/movie-details-tab';
import MovieOverviewTab from '../movie-overview-tab/movie-overview-tab';
import MovieReviewsTab from '../movie-reviews-tab/movie-reviews-tab';

type CurrentMovieProps = {
  currentMovie: MovieData;
};

function MovieDescription({ currentMovie }: CurrentMovieProps) {
  const [currentTab, setCurrentTab] = useState<MovieTabs>(MovieTabs.Overview);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.keys(MovieTabs)
            .filter((movieTab) => isNaN(+movieTab))
            .map((movieTab) => (
              <li
                key={movieTab}
                className={`film-nav__item ${
                  currentTab === MovieTabs[movieTab] && 'film-nav__item--active'
                }`}
              >
                <a
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    setCurrentTab(MovieTabs[movieTab]);
                  }}
                  href="#"
                  className="film-nav__link"
                >
                  {movieTab}
                </a>
              </li>
            ))}
        </ul>
      </nav>
      {currentTab === MovieTabs.Overview && (
        <MovieOverviewTab currentMovie={currentMovie} />
      )}
      {currentTab === MovieTabs.Details && (
        <MovieDetailsTab currentMovie={currentMovie} />
      )}
      {currentTab === MovieTabs.Reviews && <MovieReviewsTab />}
    </div>
  );
}

export default MovieDescription;
