import {StyleSheet, Dimensions} from 'react-native';
import { Constants } from 'expo'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const buttonscontainerHeight = 100;
const titleTextMarginTop = 27;

export default StyleSheet.create({
  screen: {
    marginTop: Constants.statusBarHeight,
  },
  container: {
    backgroundColor: 'black',
  },
  buttonscontainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "1F1F1F",
    height: buttonscontainerHeight,

  },
  activityIndicator: {
    height: screenHeight - buttonscontainerHeight - titleTextMarginTop,
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    color: 'white',
    width: 150,
    marginBottom: 5,
    marginTop: 10,
    marginRight: 10,
    padding: 5,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: "center"
  },
  buttonInactive: {
    color: 'white',
    width: 150,
    marginBottom: 5,
    marginRight: 10,
    marginTop: 10,
    padding: 5,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#9b9b9b',
    alignItems: "center"
  },
  buttonText: {
    color: 'white'
  },
  buttonTextInactive: {
    color: '#9b9b9b'
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    width: screenWidth,
    marginTop: titleTextMarginTop
  }


});
