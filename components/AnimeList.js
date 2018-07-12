import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Anime from './Anime';
import {Query} from 'react-apollo'


const AnimeListComponent = ({animeList}) => {
    console.log(animeList)
    return <FlatList
        data={animeList.Page.media}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <Anime title={item.title.userPreferred}/>}
    />
};


export default AnimeList = ({query}) => {
    return <Query query={query} variables={{page: 1}}>
        {({loading, error, data}) => {
            if (loading) return <Text>Loading...</Text>
            if (error) return <Text>{error.message}</Text>
            return <AnimeListComponent animeList={data}/>
        }}
    </Query>
}
