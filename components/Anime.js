import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    coverImage: {
        width: 225 / 1.5,
        height: 335 / 1.5
    },
    animeContainer: {
        backgroundColor: '#1F1F1F',
        margin: 10,
        display: 'flex',
        padding: 10,
        borderRadius: 10
    },
    animeTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    animeDescription: {
        color: 'white',
        textAlign: 'justify'
    }
});

export default Anime = ({title, coverImage, description}) => {
    return <View style={styles.animeContainer}>
        <Image style={styles.coverImage} source={{uri: coverImage}}/>
        <Text style={styles.animeTitle}>{title}</Text>
        <Text style={styles.animeDescription}>{description}</Text>
    </View>
}
