import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlumnosProvider from './Context/AlumnosContext';
import Formulario from './Screens/Formulario';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator1 from './Navigations/StackNavigator1'


export default function App() {
  return (
    <AlumnosProvider>
      <NavigationContainer>
        <StackNavigator1/>
      </NavigationContainer>
    </AlumnosProvider>
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
