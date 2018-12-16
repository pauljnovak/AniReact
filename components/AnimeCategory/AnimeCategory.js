import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import AnimeList from '../AnimeList/AnimeList'
import styles from './AnimeCategory.styles'
import { withNavigation } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions'


const AnimeCategory = ({ query, categoryName, categoryId, navigation }) => {
  return <View style={{ marginBottom: 25 }}>
   <Transition shared={`title-${categoryName}`}>  
      <Text style={styles.categoryText}>{categoryName}</Text>
    </Transition>

    <AnimeList query={query} orientation='horizontal' />
    <View style={styles.buttonContainer}>
      <TouchableHighlight onPress={() => navigation.navigate('FullList', { type: categoryId, title: categoryName })} style={styles.button}>
        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.buttonText}>
          SEE MORE
        </Text>
      </TouchableHighlight >
    </View>
  </View>
};

export default withNavigation(AnimeCategory);