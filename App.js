import React, { Component } from 'react'
import { View } from 'react-native'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache  } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import AnimeCategoryList from './components/AnimeCategoryList/AnimeCategoryList';
import ANIME_QUERY from './queries/animeQuery'

const httpLink = new createHttpLink({ uri: 'https://graphql.anilist.co', useGETForQueries: false });
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const categories = [
    { query:ANIME_QUERY, categoryName:'Category1' },
    { query:ANIME_QUERY, categoryName:'Category2' },
    { query:ANIME_QUERY, categoryName:'Category3' },
    { query:ANIME_QUERY, categoryName:'Category4' },
    { query:ANIME_QUERY, categoryName:'Category5' },
    { query:ANIME_QUERY, categoryName:'Category6' }

];

export default class App extends Component {
    render() {
        return (
            <View style={{backgroundColor:'black', flex: 1, justifyContent: 'center'}}>
                <ApolloProvider client={client}>
                    <AnimeCategoryList categories={categories}/>
                </ApolloProvider>
            </View>
        );
    }
}
