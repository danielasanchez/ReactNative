import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import HomeScreen from './Screens/HomeScreen'
export default class App extends Component {
  state={
    cargado:false
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        cargado:true
      })
    },5000)
  }
  render(){
    return (
      <View style={styles.container}>
        {
          this.state.cargado===false
          ?
          <ActivityIndicator size="large" color="#00ff00" />
          :
          <HomeScreen/>
        }
        <StatusBar style="auto" />
      </View>
    )};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
