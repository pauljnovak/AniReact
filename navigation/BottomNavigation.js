import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen'

const BottomNavigation = createMaterialBottomTabNavigator({
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen },
    Library: { screen: LibraryScreen },
}, {
        initialRouteName: 'Home',
        activeColor: '#ffffff',
        inactiveColor: '#9b9b9b',
        barStyle: { backgroundColor: '#1F1F1F' },
    });

export default BottomNavigation;