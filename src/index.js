import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const backendUrl = process.env.NODE_ENV === 'production' ? 'https://jeffcap1-server-catstronauts.herokuapp.com/' : 'http://localhost:4000';

console.log(process.env)
console.log({ backendUrl });

const client = new ApolloClient({
  uri: backendUrl,
  cache: new InMemoryCache(),
  name: "web",
  version: "1.0",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
