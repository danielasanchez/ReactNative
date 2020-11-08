import React from 'react'
import { View } from 'react-native'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default function Home() {
    return (
        <View style={{flex:1}}>
            <Header/>
            <Body/>
            <Footer/>
        </View>
    )
}


