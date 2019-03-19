import React from 'react';
import { Platform, View } from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../containers/HomeScreen';
import LinksScreen from '../containers/LinksScreen';
import SettingsScreen from '../containers/SettingsScreen';

const HomeStack = createStackNavigator({
  home: HomeScreen,
});

HomeStack.navigationOptions = {
  drawerLabel: <View />,
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-folder-open' : 'md-folder-open'} />
  ),
};

const LinksStack = createStackNavigator({
  links: LinksScreen,
});

LinksStack.navigationOptions = {
  drawerLabel: <View />,
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-megaphone' : 'md-megaphone'} />
  ),
};

const SettingsStack = createStackNavigator({
  settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  drawerLabel: <View />,
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'} />
  ),
};

export default createDrawerNavigator(
  {
    HOME: HomeStack,
    LINK: LinksStack,
    SETTINGS: SettingsStack,
  },
  {
    initialRouteName: 'HOME',
    drawerBackgroundColor: 'transparent',
    drawerWidth: 50,
  }
);
