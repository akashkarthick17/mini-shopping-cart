import React from 'react';
import { RouteProps } from 'react-router';
import { Route } from 'react-router-dom';

export const UnauthenticatedRouter: React.FC<RouteProps> = ({
  path,
  component,
  exact = false,
  ...rest
}) => {
  return <Route path={path} exact={exact} component={component} {...rest} />;
};
