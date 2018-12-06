import React from 'react';
import {Text} from 'react-native';
import {Query} from 'react-apollo';
import AnimeVerticalList from '../AnimeVerticalList/AnimeVerticalList';
import AnimeHorizontalList from '../AnimeHorizontalList/AnimeHorizontalList';

const AnimeList = ({query, orientation}) => {
  return <Query query={query}
                variables={{page: 1}}
  >
    {({loading, error, data, fetchMore}) => {
      if (loading) {
        return <Text>Loading...</Text>;
      }
      if (error) {
        return <Text>{error.message}</Text>;
      }
      return orientation === 'vertical' ? <AnimeVerticalList data={data} fetchMore={fetchMore}/> : <AnimeHorizontalList animeList={data}/>;
    }}
  </Query>;
};
export default AnimeList;
