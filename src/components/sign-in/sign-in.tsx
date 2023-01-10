import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/actions/api-actions';
import { UserData } from '../../types/user.model';
import Footer from '../footer/footer';
import Header from '../header/header';
// import { ChangeEvent, FormEvent, useState } from 'react';

function SignIn() {
  const { register, formState: {errors}, handleSubmit } = useForm<UserData>();
  // const [userAccountData, setUserAccountData] = useState<UserData>({
  //   email: '',
  //   password: '',
  // });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitForm: SubmitHandler<UserData> = (userData) => {
    // e.preventDefault();
    dispatch(loginAction(userData));
    navigate(AppRoute.Main);
  };

  return (
    <div className="user-page">
      <Header />
      <div className="sign-in user-page__content">
        <form onSubmit={handleSubmit(handleSubmitForm)} className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                // name="user-email"
                id="user-email"
                // value={userAccountData.email}
                // onChange={(e: ChangeEvent<HTMLInputElement>) =>
                //   setUserAccountData({
                //     ...userAccountData,
                //     email: e.target.value,
                //   })}
                {...register('email', {required: true})}
              />
              <div style={{height: 40}}></div>
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
                // name="user-password"
                id="user-password"
                // value={userAccountData.password}
                // onChange={(e: ChangeEvent<HTMLInputElement>) =>
                //   setUserAccountData({
                //     ...userAccountData,
                //     password: e.target.value,
                //   })}
                {...register('password')}
              />
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
