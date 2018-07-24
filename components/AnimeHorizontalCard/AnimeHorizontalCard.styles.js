import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width;
const colWidth = screenWidth/4;

export default StyleSheet.create({
    coverImage: {
        width: colWidth ,
        height: colWidth * 1.5
    }

});
