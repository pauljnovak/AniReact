import React from 'react';
import {FlatList, View} from 'react-native';
import AnimeCategory from '../AnimeCategory/AnimeCategory';

const AnimeCategoryList = ({categories}) => {
  return <View><FlatList
    data={categories}
    keyExtractor={(category) => category.categoryName}
    renderItem={(category) => {
      console.log(category.item);
      return <AnimeCategory query={category.item.query}
                            categoryName={category.item.categoryName}
      />;
    }}
  /></View>;
};
export default AnimeCategoryList;

