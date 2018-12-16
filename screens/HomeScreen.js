import React, { Component } from 'react'
import { View } from 'react-native'
import { ApolloProvider } from 'react-apollo';
import client from '../configuration/apolloConfiguration'
import AnimeCategoryList from '../components/AnimeCategoryList/AnimeCategoryList';
import animePopularThisSeasonList from '../queries/animePopularThisSeasonListQuery';
import animeTopScoreListQuery from '../queries/animeTopScoreListQuery';
import animePopularListQuery from '../queries/animePopularListQuery';
import animeTrendingListQuery from '../queries/animeTrendingListQuery';
 

const categories = [
    { query:animePopularThisSeasonList, categoryName:'Popular this season', categoryId:'PopularThisSeason' },
    { query:animeTopScoreListQuery, categoryName: 'Top Score', categoryId:'TopScore' },
    { query:animePopularListQuery, categoryName: 'Popular', categoryId:'Popular'  },
    { query:animeTrendingListQuery, categoryName: 'Trending',  categoryId:'Trending'}

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
