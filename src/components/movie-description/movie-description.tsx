import { useState } from 'react';
import { MovieTabs } from '../../consts';
import { MovieData } from '../../types/movie.model';
import MovieDetailsTab from '../movie-details-tab/movie-details-tab';
import MovieOverviewTab from '../movie-overview-tab/movie-overview-tab';
import MovieReviewsTab from '../movie-reviews-tab/movie-reviews-tab';

type CurrentMovieProps = {
  currentMovie: MovieData
}

function MovieDescription({currentMovie}: CurrentMovieProps) {
  const [currentTab, setCurrentTab] = useState<string>(MovieTabs.Overview);

  const getOverviewTab = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentTab(MovieTabs.Overview);
  };

  const getDetailsTab = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentTab(MovieTabs.Details);
  };

  const getReviewsTab = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentTab(MovieTabs.Reviews);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <a onClick={getOverviewTab} href="#" className="film-nav__link">
              {MovieTabs.Overview}
            </a>
          </li>
          <li className="film-nav__item">
            <a
              onClick={getDetailsTab}
              href="#"
              className="film-nav__link"
            >
              {MovieTabs.Details}
            </a>
          </li>
          <li className="film-nav__item">
            <a
              onClick={getReviewsTab}
              href="#"
              className="film-nav__link"
            >
              {MovieTabs.Reviews}
            </a>
          </li>
        </ul>
      </nav>
      {currentTab === MovieTabs.Overview && <MovieOverviewTab currentMovie={currentMovie} />}
      {currentTab === MovieTabs.Details && <MovieDetailsTab currentMovie={currentMovie} />}
      {currentTab === MovieTabs.Reviews && <MovieReviewsTab currentMovie={currentMovie} />}
    </div>
  );
}

export default MovieDescription;
