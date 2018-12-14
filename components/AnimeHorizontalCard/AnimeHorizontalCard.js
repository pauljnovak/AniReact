import React from 'react'
import {Image} from 'react-native'
import styles from './AnimeHorizontalCard.styles'

const AnimeHorizontalCard = ({coverImage}) => {
    console.log(coverImage)
    return <Image style={styles.coverImage} source={{uri: coverImage}}/>
};

export default AnimeHorizontalCard;
