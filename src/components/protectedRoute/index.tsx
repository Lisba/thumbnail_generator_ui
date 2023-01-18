import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface IProps {
  isAllowed: boolean;
  children?: React.ReactNode;
  redirectTo?: string;
}

const ProtectedRoute = ({ isAllowed, redirectTo = '/', children }: IProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
