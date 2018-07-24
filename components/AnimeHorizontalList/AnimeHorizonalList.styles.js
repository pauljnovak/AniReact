import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width;
const colWidth = screenWidth/4;

export default StyleSheet.create({
    container: {
        height: colWidth * 1.5,
        backgroundColor: '#1F1F1F',
        margin: 10,
        padding: 10,
        borderRadius: 10
    }

});
