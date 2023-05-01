import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Body = () => {
    return (
        <View style={styles.container}>
            <Text>Body</Text>
        </View>
    )
}

export default Body

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1fcb44',
        alignItems:'center',
        justifyContent:'center',
        flex:2//height:'50%',
    },   
})