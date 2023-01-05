import { Link } from 'react-router-dom';
import { APIRoute } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getCurrentMovie } from '../../store/slices/movie-data/selectors';

function AddReviewBreadCrumbs() {
  const currentMovie = useAppSelector(getCurrentMovie);

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link
            to={`${APIRoute.Movies}/${currentMovie!.id}`}
            className="breadcrumbs__link"
          >
            {currentMovie!.name}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <Link
            to={`${APIRoute.Movies}/${currentMovie!.id}/${APIRoute.Review}`}
            className="breadcrumbs__link"
          >
            Add review
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AddReviewBreadCrumbs;
