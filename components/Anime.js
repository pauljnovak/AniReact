import React, {Component} from 'react';
import { View,Text, Image } from 'react-native';

export default Anime = ({title, coverImage}) => {
        //return
    return <View><Image style={{width:200,height:200}} source={{uri:coverImage}}/><Text>{title}</Text></View>
}
