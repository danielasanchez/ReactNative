import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Formulario from '../Screens/Formulario';
import Listado from '../Screens/Listado';

const Stack = createStackNavigator();

export default function StackNavigator1(){
    return(
        <Stack.Navigator>

            <Stack.Screen
                name="Listado"
                component={Listado}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="Formulario"
                component={Formulario}
            />

        </Stack.Navigator>
    )
}
