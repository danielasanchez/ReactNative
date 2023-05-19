import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import AnotherScreenTwo from '../Screens/AnotherScreenTwo';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Navigations/StackNavigation1';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1() {
    return (
        <Tab.Navigator
            initialRouteName="Settings"
            screenOptions={{ //Versiones anteriores tabBarOptions
                tabBarActiveTintColor: '#ff6600',//activeTintColor
                tabBarInactiveTintColor: "#060606",//inactiveTintColor
                tabBarShowLabel: true,//showLabel
                tabBarLabelStyle: { //labelStyle
                    fontSize: 12
                },
                tabBarStyle: {//style
                    paddingBottom: 5,
                    backgroundColor: "#f3f3f1"
                }

            }}
        >

           
            <Tab.Screen
                //en name, no debe tener el mismo nombre que en el drawer
                //por eso no se llama Settings 
                name="AnotherSettings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "Configuración",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={"ios-settings"} size={20} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Another 2"
                component={AnotherScreenTwo}
                options={{
                    tabBarLabel: "Another 2",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={"ios-help-circle"} size={20} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}