import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/selectors';

import RegisterPage from 'components/RegisterPage/RegisterPage';
import { Loader } from 'components/Loader/Loader';

const Register = () => {
  
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? <Loader /> : <RegisterPage />}
    </>
  );
};

export default Register;
