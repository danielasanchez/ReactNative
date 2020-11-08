import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text>Footer</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4afb6f',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1//height:'25%',
    },   
})
