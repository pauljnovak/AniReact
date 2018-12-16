import React from 'react';
import {FlatList, View} from 'react-native';
import AnimeCategory from '../AnimeCategory/AnimeCategory';
import { LinearGradient } from 'expo'

const AnimeCategoryList = ({categories}) => {
  return <View><FlatList
    data={categories}
    keyExtractor={(category) => category.categoryName}
    renderItem={({item, index}) => {
      console.log(index)
      if(index === 0) {
        return <View><LinearGradient colors={["#1F1F1F", "#000000"]} style={{height:50}}/><AnimeCategory query={item.query}
        categoryName={item.categoryName} categoryId={item.categoryId}/></View>
      }
      return <AnimeCategory query={item.query}
                            categoryName={item.categoryName}
                            categoryId={item.categoryId}
      />;
    }}
  /></View>;
};
export default AnimeCategoryList;

