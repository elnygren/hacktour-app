import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MyEventsScreen from '../screens/MyEventsScreen';
import EventScreen from '../screens/EventScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Event: EventScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const MyEventsStack = createStackNavigator({
  MyEvents: MyEventsScreen,
  Event: EventScreen,
});

MyEventsStack.navigationOptions = {
  tabBarLabel: 'My Events',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  MyEventsStack,
}, {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: 'black',
      },
    },
});
