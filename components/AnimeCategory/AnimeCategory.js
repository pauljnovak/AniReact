import React from 'react'
import {Text, View } from 'react-native'
import AnimeList from '../AnimeList/AnimeList'
import styles from './AnimeCategory.styles'


const AnimeCategory = ({query, categoryName}) => {
  return <View>
    <Text style={styles.categoryText}>{categoryName}</Text>
    <Text style={styles.categoryText}>see more</Text>
    <AnimeList query={query} orientation='horizontal'/>
  </View>
};

export default AnimeCategory;