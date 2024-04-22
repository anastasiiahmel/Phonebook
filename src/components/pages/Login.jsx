import { useSelector } from 'react-redux';

import { selectIsLoading } from 'redux/auth/selectors';
import LoginPage from 'components/LoginPage/LoginPage';

import { Loader } from 'components/Loader/Loader';

const Login = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? <Loader /> : <LoginPage />}
    </>
  );
};

export default Login;