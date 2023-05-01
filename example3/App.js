import { StatusBar } from 'expo-status-bar';
import { Component, useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import HomeScreen from './Screens/HomeScreen';

//codigo en componente de tipo clase al final
export default function App(){

  const [cargado,setCargado] = useState(false)

  useEffect(()=>{
    const timer = setTimeout(()=>{
                    setCargado(true)
                  },5000)
             
    return ()=>clearTimeout(timer)
  },[])


    return (
      <View style={styles.container}>
        {
          cargado===false
          ?
          <ActivityIndicator size="large" color="#00ff00" />
          :
          <HomeScreen/>
        }
        <StatusBar style="auto" />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/*
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

*/
