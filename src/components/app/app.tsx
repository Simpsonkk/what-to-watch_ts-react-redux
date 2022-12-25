// import MoviePage from '../movie-page/movie-page';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { fetchMovieCatalogAction } from '../../store/actions/api-actions';
import AddReview from '../add-review/add-review';
import MainPage from '../main-page/main-page';
import MoviePage from '../movie-page/movie-page';
import MyMovieList from '../my-movie-list/my-movie-list';
import NotFoundPage from '../not-found-page/not-found.page';
import SignIn from '../sign-in/sign-in';
import VideoPlayer from '../video-player/video-player';

const routing = createBrowserRouter([
  {
    path: AppRoute.Main,
    element: <MainPage />,
  },
  {
    path: AppRoute.AddReview,
    element: <AddReview />,
  },
  {
    path: AppRoute.Movie,
    element: <MoviePage />,
  },
  {
    path: AppRoute.MyList,
    element: <MyMovieList />,
  },
  {
    path: AppRoute.Player,
    element: <VideoPlayer />,
  },
  {
    path: AppRoute.SignIn,
    element: <SignIn />,
  },
  {
    path: AppRoute.NotFound,
    element: <NotFoundPage />,
  },

]);

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieCatalogAction());
  }, [dispatch]);

  return <RouterProvider router={routing} />;
}

export default App;
