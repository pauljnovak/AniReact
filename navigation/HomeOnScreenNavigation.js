import tabBarIcon from './tabBarIcon'
import { createFluidNavigator } from 'react-navigation-fluid-transitions'
import HomeScreen from '../screens/HomeScreen'
import FullListScreen from '../screens/FullListScreen'



const HomeOnScreenNavigation = createFluidNavigator({
    Initial: { screen: HomeScreen },
    FullList: { screen: FullListScreen }
},{
    initialRouteName: 'Initial'
});

export default HomeOnScreenNavigation;