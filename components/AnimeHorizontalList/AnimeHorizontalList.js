import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {Query} from 'react-apollo';
import AnimeHorizontalCard from '../AnimeHorizontalCard/AnimeHorizontalCard';
import styles from '../AnimeHorizontalList/AnimeHorizonalList.styles';

const AnimeHorizontalList = ({query}) => {
  return <Query query={query}
  variables={{page: 1}}>
   {({loading, error, data}) => {
      if (loading) {
        return <Text>Loading...</Text>;
      }
      if (error) {
        return <Text>{error.message}</Text>;
      }

    return <View style={styles.container}><FlatList
      data={data.Page.media}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      ItemSeparatorComponent={() => <View style={{width: 5}}/>}
      renderItem={({item}) => <AnimeHorizontalCard coverImage={item.coverImage.medium}/>
      
      }
    /></View>
  }}
  </Query>;
};

export default AnimeHorizontalList;

