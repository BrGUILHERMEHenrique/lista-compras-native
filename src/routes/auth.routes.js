import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import login from '../views/login/index';

const Auth = createStackNavigator();

const AuthRoutes = () => (
    <Auth.Navigator screenOptions={{
        headerShown: false
      }}>
        <Auth.Screen name="login" component={login} />
      </Auth.Navigator>
);

export default AuthRoutes;