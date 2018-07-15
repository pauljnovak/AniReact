import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    coverImage: {
        width: 225 / 1.5,
        height: 335 / 1.5
    },
    animeContainer: {
        backgroundColor: '#1F1F1F',
        margin: 10,
        padding: 10,
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
        width: 150
    },
    animeInfoRightCol: {
        marginLeft: 20
    }

});
