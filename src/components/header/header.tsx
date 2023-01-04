import { AuthorizationStatus } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/slices/user-process/selector';
import HeaderAuth from '../header-auth/header-auth';
import HeaderNoAuth from '../header-no-auth/header-no-auth';
import Logo from '../logo/logo';

function Header() {
  const authStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="page-header film-card__head">
      <Logo />
      {authStatus === AuthorizationStatus.Auth ? (
        <HeaderAuth />
      ) : (
        <HeaderNoAuth />
      )}
    </header>
  );
}

export default Header;
