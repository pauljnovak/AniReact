import React from 'react';
import {FlatList, View} from 'react-native';
import Anime from '../AnimeHorizontalCard/AnimeHorizontalCard';
import styles from '../AnimeHorizontalList/AnimeHorizonalList.styles';

const AnimeHorizontalList = ({animeList}) => {
  return <View style={styles.container}><FlatList
    data={animeList.Page.media}
    keyExtractor={(item) => item.id.toString()}
    horizontal
    ItemSeparatorComponent={() => <View style={{width: 5}}/>}
    renderItem={({item}) =>
      <Anime coverImage={item.coverImage.large}/>
    }
  /></View>;
};

export default AnimeHorizontalList;

