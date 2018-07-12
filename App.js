import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache  } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import AnimeList from './components/AnimeList'

const httpLink = new createHttpLink({ uri: 'https://graphql.anilist.co', useGETForQueries: false });
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})


export default class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
              <AnimeList />
            </ApolloProvider>
        );
    }
}
