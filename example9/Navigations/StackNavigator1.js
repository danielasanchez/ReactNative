import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';

const Stack = createStackNavigator();

export default function StackNavigator1() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="DetailScreen"
                component={DetailScreen}
                options={({ route }) => ({
                    title: route.params.movie.Title
                })

                }

            />

        </Stack.Navigator>
    )
}