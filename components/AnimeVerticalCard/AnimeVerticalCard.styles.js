import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width;
const cardMargin = 10;
const cardPadding = 10;
const colSpace = 20;
const colWidth = (screenWidth - 2*cardMargin - 2*cardPadding - colSpace)/2;

export default StyleSheet.create({
    coverImage: {
        width: colWidth ,
        height: colWidth * 1.5
    },
    animeContainer: {
        backgroundColor: '#1F1F1F',
        margin: cardMargin,
        padding: cardPadding,
        borderRadius: 10,
    },
    animeTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    animeH1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    animeDescription: {
        color: 'white',
        textAlign: 'justify',

    },
    animeHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    animeGenre: {
        backgroundColor:'#1D3163',
        marginBottom:5,
        marginRight:5,
        padding: 5,
        height:30,
        borderRadius:5
    },
    animeGenreText: {
        color: 'white'
    },
    animeGenreWrapper: {
        flex:1,
        flexDirection:'row',
        marginTop: 10,
        flexWrap: 'wrap',
        width: colWidth
    },
    animeInfoRightCol: {
        marginLeft: colSpace
    }

});
