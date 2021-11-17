import React from 'react';
import {Text, View} from 'react-native'
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import HomeScreen from './StackNavigation1';
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator1(){
    return(
        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{
                backgroundColor:'#ffff',
                width:'80%'
            }}
            drawerContentOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606"
            }}
            drawerContent={(props)=>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props}/>
                    <View style={{flexDirection:'row', marginLeft: 20, marginTop:15}}>
                        <Ionicons name='md-exit' size={25} color={'#060606'}/>
                        <Text style={{marginLeft:30}} onPress={()=>alert("Cerrando sesión")}>Cerrar sesión</Text>
                    </View>
                </DrawerContentScrollView>
            }
        
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown:false,
                    drawerLabel:"Inicio",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />

            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    headerShown:false,
                    drawerLabel:"Configuración",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-settings"} size={20} color={color}/>
                    )
                }}
            />

            <Drawer.Screen
                name="About"
                component={AboutScreen}
                options={{
                    headerShown:false,
                    drawerLabel:"Acerca de",
                    drawerIcon:({color})=>(
                        <Ionicons name={"ios-help-circle"} size={20} color={color}/>
                    )
                }}
            />

        </Drawer.Navigator>
    )
}