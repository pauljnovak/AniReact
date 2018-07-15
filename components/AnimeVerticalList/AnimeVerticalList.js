import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Anime from '../AnimeVerticalCard/AnimeVerticalCard';
import styles from './AnimeVerticalList.styles'

export default AnimeVerticalList = ({animeList, loadMore}) => {

    return <FlatList
        style={styles.container}
        data={animeList.Page.media}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMore}
        renderItem={({item}) =>
            <Anime
                coverImage={item.coverImage.large}
                title={item.title.userPreferred}
                description={item.description}
                averageScore={item.averageScore}
                episodes={item.episodes}
                genres={item.genres}
            />}
    />
};

