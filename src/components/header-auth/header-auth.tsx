import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { getUserAvatarUrl } from '../../services/user-avatar-url';
import { logoutAction } from '../../store/actions/api-actions';
import AddReviewBreadCrumbs from '../bread-crumbs/bread-crumbs';

type HeaderAuthProps = {
  breadCrumbs?: boolean;
};

function HeaderAuth({ breadCrumbs }: HeaderAuthProps): JSX.Element {
  const navigate = useNavigate();
  const userAvatar = getUserAvatarUrl();
  const dispatch = useAppDispatch();

  return (
    <>
      {breadCrumbs && <AddReviewBreadCrumbs />}
      <ul className="user-block">
        <li className="user-block__item">
          <div
            onClick={() => navigate(AppRoute.MyList)}
            className="user-block__avatar"
          >
            <img src={userAvatar} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link
            onClick={(e) => {
              e.preventDefault();
              dispatch(logoutAction());
            }}
            className="user-block__link"
            to={AppRoute.Main}
          >
            Sign out
          </Link>
        </li>
      </ul>
    </>
  );
}

export default HeaderAuth;
