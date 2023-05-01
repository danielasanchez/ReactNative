import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text>Header</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#196e2b',
        alignItems:'center',
        justifyContent:'center',
        flex:1//height:'25%',
    },   
})
