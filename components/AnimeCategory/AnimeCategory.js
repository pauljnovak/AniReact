import React from 'react'
import {Text, View } from 'react-native'
import AnimeList from '../AnimeList/AnimeList'
import styles from './AnimeCategory.styles'

export default AnimeCategory = ({query, categoryName}) => {
    return <View>
        <Text style={styles.categoryText}>{categoryName}</Text>
        <AnimeList query={query} orientation='horizontal'/>
    </View>
}
