import React, { Component } from 'react'
import { View } from 'react-native'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache  } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import BottomNavigation from './navigation/BottomNavigation'

const httpLink = new createHttpLink({ uri: 'https://graphql.anilist.co', useGETForQueries: false });
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default class App extends Component {
    render() {
        return (
            <BottomNavigation/>
        );
    }
}