// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import color from '../../../Componets/assets/Theme/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../../Dashboard/Dashboard';
import Settings from '../../Settings/Settings';
import Statics from '../../Statics/Statics';
import Routines from '../../Routines/Routines';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomNavitaon() {
  return (
     
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {

        if (route.name === 'Home') {
          return (
            <Ionicons
              name={
                focused
                  ? 'ios-home-sharp'
                  : 'ios-home-sharp'
              }
              size={size}
              color={color}
            />
          );
        } 

        else if (route.name === 'Statics') {
          return (
            <Ionicons
              name={
                focused
                  ? 'ios-stats-chart'
                  : 'ios-stats-chart'
              }
              size={size}
              color={color}
            />
          );
        } 
        else if (route.name === 'Routines') {
          return (
            <MaterialCommunityIcons
              name={
                focused
                  ? 'vector-circle'
                  : 'vector-circle'
              }
              size={size}
              color={color}
            />
          );
        }          
        
        else if (route.name === 'Setting') {
          return (
            <Ionicons
              name={focused ? 'md-settings-sharp' : 'md-settings-sharp'}
              size={size}
              color={color}
            />
          );
        }
      },
    })} 
    tabBarOptions={{   
      activeTintColor: color.yellow,
      inactiveTintColor: color.gray,
    }}
  >
    <Tab.Screen name="Home" component={Dashboard}  />
    <Tab.Screen name="Statics" component={Statics} />
    <Tab.Screen name="Routines" component={Routines}  />
    <Tab.Screen name="Setting" component={Settings}  />
  </Tab.Navigator>
  );
}
