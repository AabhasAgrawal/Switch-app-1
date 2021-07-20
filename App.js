import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
 import {createBottomTabNavigator} from 'react-navigation-tabs';
 import Facebook from './Screens/fd'
import Instagram from './Screens/in'

export default function App() {
  return (
    <AppContanier />
  );
}

const TabNavigator = createBottomTabNavigator({
  facebook : {screen : Facebook },
  Instagram : {screen : Instagram},
})

const AppContanier = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
