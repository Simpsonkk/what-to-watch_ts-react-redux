import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  checkAuthStatusAction,
  fetchMovieCatalogAction,
  fetchPromoMovieAction
} from '../../store/actions/api-actions';
import { getLoadedDataStatus } from '../../store/slices/movie-data/selectors';
import { getAuthorizationStatus } from '../../store/slices/user-process/selector';
import AddReview from '../add-review/add-review';
import Loader from '../loader/loader';
import MainPage from '../main-page/main-page';
import MoviePage from '../movie-page/movie-page';
import MyMovieList from '../my-movie-list/my-movie-list';
import NotFoundPage from '../not-found-page/not-found.page';
import PrivatRoute from '../privat-route/privat-route';
import SignIn from '../sign-in/sign-in';
import VideoPlayer from '../video-player/video-player';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPromoMovieAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkAuthStatusAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMovieCatalogAction());
  }, [dispatch]);

  const isDataLoaded = useAppSelector(getLoadedDataStatus);
  const authStatus = useAppSelector(getAuthorizationStatus);

  if (!isDataLoaded) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage />} />
      <Route path={AppRoute.SignIn} element={<SignIn />} />
      <Route path={AppRoute.Movie} element={<MoviePage />} />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivatRoute authStatus={authStatus}>
            <MyMovieList />
          </PrivatRoute>
        }
      />
      <Route
        path={AppRoute.AddReview}
        element={
          <PrivatRoute authStatus={authStatus}>
            <AddReview />
          </PrivatRoute>
        }
      />
      <Route path={AppRoute.Player} element={<VideoPlayer />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
