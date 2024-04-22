import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogIn } from '../redux/auth/selectors';

export const PublicRoute = ({ children }) => {

  const isLogdIn = useSelector(selectLogIn);
  const location = useLocation();

  return (
    <>
      {!isLogdIn ? children : <Navigate to='/contacts' state={location} />}
    </>
  );
};