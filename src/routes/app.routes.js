import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/home/index';

const Auth = createStackNavigator();

const AppRoutes = () => (
    <Auth.Navigator screenOptions={{
        headerShown: false
      }}>
        <Auth.Screen name="home" component={Home} />
      </Auth.Navigator>
);

export default AppRoutes;