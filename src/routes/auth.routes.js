import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import login from '../views/login/index';
import cadastro from '../views/cadastro/index';
import selecaoFamilia from '../views/SelecaoFamilia/index';

const Auth = createStackNavigator();

const AuthRoutes = () => (
    <Auth.Navigator screenOptions={{
        headerShown: false
      }}>
        <Auth.Screen name="login" component={login} />
        <Auth.Screen name="cadastro" component={cadastro} />
        <Auth.Screen name="selecaoFamilia" component={selecaoFamilia} />
      </Auth.Navigator>
);

export default AuthRoutes;