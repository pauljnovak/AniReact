import React, { Component } from 'react'
import { View } from 'react-native'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache  } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import AnimeCategoryList from '../components/AnimeCategoryList/AnimeCategoryList';
import animePopularThisSeasonList from '../queries/animePopularThisSeasonListQuery';
import animeTopScoreListQuery from '../queries/animeTopScoreListQuery';
import animePopularListQuery from '../queries/animePopularListQuery';
import animeTrendingListQuery from '../queries/animeTrendingListQuery';
 

const httpLink = new createHttpLink({ uri: 'https://graphql.anilist.co', useGETForQueries: false });
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const categories = [
    { query:animePopularThisSeasonList, categoryName:'Popular this season' },
    { query:animeTopScoreListQuery, categoryName: 'Top Score' },
    { query:animePopularListQuery, categoryName: 'Popular'},
    { query:animeTrendingListQuery, categoryName: 'Trending'}

];

export default class Home extends Component {
    render() {
        return (
            <View style={{backgroundColor:'black', flex: 1, justifyContent: 'center'}}>
                <ApolloProvider client={client}>
                    <AnimeCategoryList categories={categories}/>
                </ApolloProvider>
            </View>
        );
    }
};
