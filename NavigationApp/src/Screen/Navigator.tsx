import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from '~/Screen/HomeScreen';
import Settings from '~/Screen/Settings';
import Details from '~/Screen/Details';
import Notifications from '~/Screen/Notifications';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeDrawerScreen = () => {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="홈" component={HomeScreen} />
        <Drawer.Screen name="알람" component={Notifications} />
      </Drawer.Navigator>
  );
};
const SettingsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeDrawerScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;