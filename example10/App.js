import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlumnosProvider from './Context/AlumnosContext';
import Formulario from './Screens/Formulario';

export default function App() {
  return (
    <AlumnosProvider>
      <Formulario/>
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
