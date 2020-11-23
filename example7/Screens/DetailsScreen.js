import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const DetailsScreen = ({route,navigation}) => {
    const {nombre}=route.params;
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <Text>{ nombre }</Text>
            <Button 
                title="Vamos a la otra pantalla"
                onPress={()=>navigation.navigate('AnotherScreen')}
            />
            <Button 
                title="Regresemos a Home"
                onPress={()=>navigation.goBack()}
            />
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  