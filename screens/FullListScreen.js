import React, { Component } from 'react'
import { View } from 'react-native'
import { ApolloProvider } from 'react-apollo';
import client from '../configuration/apolloConfiguration'
import AnimeList from '../components/AnimeList/AnimeList';
import animeTopScoreFullListQuery from '../queries/animeTopScoreFullListQuery';
import animePopularFullListQuery from '../queries/animePopularFullListQuery';
import animePopularThisSeasonFullListQuery from '../queries/animePopularThisSeasonFullListQuery';
import animeTrendingFullListQuery from '../queries/animeTrendingFullListQuery';
 
function getQuery(value) {
    switch(value) {
        case "TopScore": return animeTopScoreFullListQuery;
        case "Popular": return animePopularFullListQuery;
        case "PopularThisSeason": return animePopularThisSeasonFullListQuery;
        case "Trending": return animeTrendingFullListQuery;
    }
}


export default class FullList extends Component {
    render() {
        const { navigation } = this.props;
        const type = navigation.getParam('type', 'TopScore');   
        const title = navigation.getParam('title', '');  
        console.log(title)
        return (
            <View style={{backgroundColor:'black', flex: 1, justifyContent: 'center'}}>
                <ApolloProvider client={client}>
                    <AnimeList query={getQuery(type)} orientation='vertical' title={title}/> 
                </ApolloProvider>
            </View>
        );
    }
};
