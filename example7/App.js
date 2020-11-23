import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1'
import BottomTabNavigator1 from './Navigations/BottomTabNavigator1';
import TopTapNavigator1 from './Navigations/TopTapNavigator1'

export default function App() {
  return (
      <NavigationContainer>
        <TopTapNavigator1/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
