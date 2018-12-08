import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen'
import tabBarIcon from './tabBarIcon';


class Home extends React.Component {
    static navigationOptions = {
      tabBarIcon: tabBarIcon('home'),
    };
  
    render() {
      return <HomeScreen />;
    }
  }
  
  class Search extends React.Component {
    static navigationOptions = {
      tabBarIcon: tabBarIcon('search'),
    };
  
    render() {
      return <SearchScreen />;
    }
  }
  
  class Library extends React.Component {
    static navigationOptions = {
      tabBarIcon: tabBarIcon('list'),
    };
  
    render() {
      return <LibraryScreen  />;
    }
  }
  

const BottomNavigation = createMaterialBottomTabNavigator({
    Home,
    Search,
    Library,
}, {
        initialRouteName: 'Home',
        activeColor: '#ffffff',
        inactiveColor: '#9b9b9b',
        barStyle: { backgroundColor: '#1F1F1F' },
    });

export default BottomNavigation;