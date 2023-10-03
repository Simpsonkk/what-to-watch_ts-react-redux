import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/actions/api-actions';
import { UserData } from '../../types/user.model';
import Footer from '../footer/footer';
import Header from '../header/header';

function SignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserData>({
    mode: 'onChange',
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitForm: SubmitHandler<UserData> = (userData) => {
    dispatch(loginAction(userData));
    navigate(AppRoute.Main);
  };

  return (
    <div className="user-page">
      <Header />
      <div className="sign-in user-page__content">
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="sign-in__form"
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                placeholder="Email address"
                id="user-email"
                {...register('email', {
                  required: 'Required field',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address',
                  },
                })}
              />
              <div style={{ height: 40 }}>
                {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
              </div>
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                id="user-password"
                {...register('password', {
                  required: 'Required field',
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: 'Minimum eight characters, at least one letter and one number',
                  },
                })}
              />
              <div style={{ height: 40 }}>
                {errors?.password && (
                  <p>{errors?.password?.message || 'Error!'}</p>
                )}
              </div>
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
