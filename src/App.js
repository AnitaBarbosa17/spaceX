import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { LaunchesContainer } from './containers/LaunchesContainer';

function App() {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/'
  });

  return (
    <ApolloProvider client={client}>
      <LaunchesContainer />
    </ApolloProvider>
  );
}

export default App;
