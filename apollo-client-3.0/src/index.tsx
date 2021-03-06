import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import { CardManager } from './pages/CardManager';
import * as serviceWorker from './serviceWorker';

// Set up our apollo-client to point at the server we created
// this can be local or a remote endpoint
export const cache = new InMemoryCache({
  possibleTypes: {
    Node: ['Card', 'Category'],
  },
  typePolicies: {
    Query: {
      fields: {
        card(existingData, { args, toReference }) {
          return (
            existingData || toReference({ __typename: 'Card', id: args?.id })
          );
        },
        category(existingData, { args, toReference }) {
          return (
            existingData ||
            toReference({ __typename: 'Category', id: args?.id })
          );
        },
      },
    },
    Card: {
      fields: {
        _categories: {
          keyArgs: [],
        },
      },
    },
    Category: {
      fields: {
        // A dynamically computed field
        // _cards(existingData, { args, variables, toReference }) {
        //   console.log('args=', args);
        //   console.log('variables=', variables);

        //   const data =
        //     existingData ||
        //     toReference({
        //       __typename: 'Cards',
        //       categoryId: variables?.id,
        //     });
        //   return existingData;
        // },
        _cards: {
          keyArgs: [],
        },
      },
    },
  },
});

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    headers: {
      'client-name': 'brainstrike',
      'client-version': '1.0.0',
    },
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <CardManager></CardManager>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
