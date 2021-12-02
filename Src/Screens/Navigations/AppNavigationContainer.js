import React from 'react';
import BottomNavitaon from './BottomNavigations/BottomNavitaon';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation/StackNavigation';
 const AppNavigationContainer = () => {
    return (
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
    )
}
export default AppNavigationContainer;