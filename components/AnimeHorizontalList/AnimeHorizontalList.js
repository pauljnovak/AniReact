import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import Anime from '../AnimeHorizontalCard/AnimeHorizontalCard';
import styles from '../AnimeHorizontalList/AnimeHorizonalList.styles';

export default AnimeHorizontalList = ({animeList}) => {

    return <View style={styles.container}><FlatList
        data={animeList.Page.media}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        ItemSeparatorComponent={()=> <View style={{width:5}}/>}
        renderItem={({item}) =>
            <Anime coverImage={item.coverImage.large}/>
        }
    /></View>
};

