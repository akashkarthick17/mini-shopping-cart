import React from 'react';
import { RouteProps } from 'react-router';
import { Route } from 'react-router-dom';

export const AuthenticatedRouter: React.FC<RouteProps> = () => {
  return (
    <Route path='/order'>
      <div />
    </Route>
  );
};
