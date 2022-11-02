import React from 'react';
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from '../screens/Home';

export function AppRoutes() {
    return (
        <Navigator>
            <Screen name="Início" component={Home} />
        </Navigator>
    )
}