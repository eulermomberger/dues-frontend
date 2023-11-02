import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dues');
    }
  }, []);

  return (
    <>
      <Outlet/>
    </>
  );
};
