import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { client } from './apollo/client/apollo-client';
import { userInfoVar } from './apollo/reactive-variables/user-info';
import './App.css';
import { Header } from './components/header/header.component';
import { Loader } from './components/loader/loader.component';
import './css/common.css';
import { useValidateTokenQuery } from './graphql-schema/graphql-schema';
import { AuthenticatedRouter } from './router/authenticated/authenticated.router';
import { AuthenticatedRoutes } from './router/authenticated/authenticated.routes';
import { UnauthenticatedRouter } from './router/unauthenticated/unauthenticated.router';
import { UnauthenticatedRoutes } from './router/unauthenticated/unauthenticated.routes';

function App() {
  const { loading, data, error } = useValidateTokenQuery({
    skip: !Boolean(localStorage.getItem('accessToken')),
  });

  if(loading) {
    return <Loader />
  }

  if(error) {
    localStorage.clear();
  }

  if (data?.validateToken?.user) {
    userInfoVar(data.validateToken?.user);
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='container-fluid'>
          <div className='row min-vh-100 align-content-start'>
            <div className='col-12'>
              <Header />
            </div>
            <div className='col-12'>
              <Switch>
                {UnauthenticatedRoutes.map((unauthenticatedRoute) => (
                  <UnauthenticatedRouter {...unauthenticatedRoute} />
                ))}
                {AuthenticatedRoutes.map((authenticatedRoute) => (
                  <AuthenticatedRouter {...authenticatedRoute} />
                ))}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
