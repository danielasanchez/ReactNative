import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
//import {Header} from 'react-native-elements';
import { Header } from '@rneui/themed';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress:()=>navigation.openDrawer() }}
                centerComponent={{ text: 'Inicio', style: { color: '#fff' } }}
            />

            <View style={styles.container2}>
                <Button 
                    title="Vamos a la pantalla detalle" 
                    onPress={()=>navigation.navigate('DetailsScreen',{nombre:'Daniela'})}
                />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
});
  