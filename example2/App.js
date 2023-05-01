import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Plataform } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex:3}}>
        <Text>Hola mundo desde {Platform.OS}!</Text>
      </View>
      <View style={{flex:2}}>
        <Text>Hola!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:Constants.statusBarHeight
  },
  otroestilo:{
    backgroundColor:'green'
  }
});