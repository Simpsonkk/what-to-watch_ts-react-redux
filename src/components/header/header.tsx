import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

function Header() {
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {/* fix when add auth */}
      <div className="user-block">
        <Link to={AppRoute.SignIn} className="user-block__link">
          Sign in
        </Link>
      </div>
      {/* fix when add auth */}
    </header>
  );
}

export default Header;
