import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import AnimeCategory from '../AnimeCategory/AnimeCategory';

export default AnimeHorizontalList = ({categories}) => {

    return <View><FlatList
        data={categories}
        keyExtractor={(category) => category.categoryName}
        renderItem={(category) => {
            console.log(category.item)
            return <AnimeCategory query={category.item.query} categoryName={category.item.categoryName}/>
        }}
    /></View>
};

