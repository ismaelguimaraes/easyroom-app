import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

type RootStackParamList = {
    [key: string]: undefined | { [key: string]: any };
}

const AppRoutesStack = createStackNavigator<RootStackParamList>();

import { Home } from '../screens/Home';
import { Dormitory } from '../screens/Dormitory';

export function AppRoutes() {
    return (
        <AppRoutesStack.Navigator screenOptions={{ headerShown: false }}>
            <AppRoutesStack.Screen name="Home" component={Home} />
            <AppRoutesStack.Screen name="Dormitory" component={Dormitory} />
        </AppRoutesStack.Navigator>
    )
}