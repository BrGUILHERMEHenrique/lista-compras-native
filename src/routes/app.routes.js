import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../views/home/index';

const App = createBottomTabNavigator();

const AppRoutes = () => (
    <App.Navigator screenOptions={{
        headerShown: false
      }}>
        <App.Screen name="Lista" 
        component={Home} 
        options={{
            tabBarIcon: () => (
                <MaterialCommunityIcons 
                    name="clipboard-list-outline"
                    color="#000"
                    size={30}
                />
                )
        }}/>
      </App.Navigator>
);

export default AppRoutes;