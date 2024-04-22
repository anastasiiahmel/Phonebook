import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogIn } from '../redux/auth/selectors';

export const PrivateRoute = ({ children }) => {
  
  const isLogIn = useSelector(selectLogIn);
  const location = useLocation();

  return (
    <>
      {isLogIn ? children : <Navigate to='/login' state={location} />}
    </>
  );
};