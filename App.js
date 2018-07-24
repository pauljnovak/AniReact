import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache  } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import AnimeCategory from './components/AnimeCategory/AnimeCategory';
import ANIME_QUERY from './queries/animeQuery'

const httpLink = new createHttpLink({ uri: 'https://graphql.anilist.co', useGETForQueries: false });
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})


export default class App extends Component {
    render() {
        return (
            <View style={{backgroundColor:'black', flex: 1, justifyContent: 'center'}}>
                <ApolloProvider client={client}>
                    <AnimeCategory query={ANIME_QUERY} categoryName='Top'/>
                    <AnimeCategory query={ANIME_QUERY} categoryName='New Season'/>
                    <AnimeCategory query={ANIME_QUERY} categoryName='Trending'/>
                </ApolloProvider>
            </View>
        );
    }
}
