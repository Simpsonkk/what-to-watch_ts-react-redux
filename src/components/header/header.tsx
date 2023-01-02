import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import Logo from '../logo/logo';

function Header() {
  return (
    <header className="page-header film-card__head">
      <Logo />
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
