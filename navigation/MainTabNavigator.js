import React from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../containers/HomeScreen';
import LinksScreen from '../containers/LinksScreen';
import SettingsScreen from '../containers/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: <View />,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: <View />,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: <View />,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
    HomeStack,
    LinksStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      style: { borderTopColor: '#000' },
      activeTintColor: '#000',
      activeBackgroundColor: '#000',
      inactiveTintColor: '#FFF',
      inactiveBackgroundColor: '#000',
    },
  }
);
