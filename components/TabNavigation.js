import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from '../pages/ProfileScreen';
import SearchScreen from '../pages/SearchScreen';
import HomeScreen from "../pages/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home" labeled={false} barStyle={{ backgroundColor: '#0047f8' }}
            activeColor="white" >
            <Tab.Screen name="Home" component={HomeScreen}  
                options={{
                    
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={'white'} size={26} />
                    ),


                }} />
            <Tab.Screen name="Search" component={SearchScreen}      // Search Screen
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" color={'white'} size={26} />
                    ),
                }} />

            <Tab.Screen name="Profile" component={ProfileScreen}   // Profile Screen
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={'white'}
                            size={26} />
                    ),
                }} />
        </Tab.Navigator>


    )


}
export default TabNavigation

