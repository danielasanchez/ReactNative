import React from 'react';
import AlumnosProvider from './Context/AlumnosContext';
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

