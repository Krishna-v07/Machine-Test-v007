import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavitaon from '../BottomNavigations/BottomNavitaon';
import Login from '../../Login/Login';
import SplaceScreen from '../../SplaceScreen/SplaceScreen';
import AddRoom from '../../AddRooms/AddRoom';

const Stack = createStackNavigator();
function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplaceScreen">
            <Stack.Screen name="SplaceScreen" component={SplaceScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="BottomNavitaon" component={BottomNavitaon} />
            <Stack.Screen name="AddRoom" component={AddRoom} />
            
        </Stack.Navigator>
    )
}

export default StackNavigation
