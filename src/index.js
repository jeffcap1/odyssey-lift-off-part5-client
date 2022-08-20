import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

console.log(process.env)
console.log({ env: process.env.NODE_ENV });
console.log({ uri: process.env.NODE_ENV === 'production' ? 'https://jeffcap1-server-catstronauts.herokuapp.com/' : 'http://localhost:4000' });

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? 'https://jeffcap1-server-catstronauts.herokuapp.com/' : 'http://localhost:4000',
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
