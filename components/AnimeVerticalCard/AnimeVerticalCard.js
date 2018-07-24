import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './AnimeVerticalCard.styles';



export default Anime = ({title, coverImage, description, averageScore, episodes, genres}) => {
    return <View style={styles.animeContainer}>
        <View style={styles.animeHeader}>
            <Image style={styles.coverImage} source={{uri: coverImage}}/>
            <View style={styles.animeInfoRightCol}>
                <Text style={styles.animeH1}>Score: {averageScore}</Text>
                <Text style={styles.animeH1}>Episodes: {episodes}</Text>
                <View style={styles.animeGenreWrapper}>
                {
                    genres.map((genre) => { return <View key={genre+new Date()} style={styles.animeGenre}><Text style={styles.animeGenreText}>{genre}</Text></View>})
                }
                </View>
            </View>
        </View>
        <Text style={styles.animeH1}>{title}</Text>
        <Text style={styles.animeDescription}>{description}</Text>
    </View>
}
