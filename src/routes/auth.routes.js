import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import login from '../views/login/index';
import cadastro from '../views/cadastro/index';
import selecaoFamilia from '../views/selecaoFamilia/index';

const Auth = createStackNavigator();

const AuthRoutes = () => (
    <Auth.Navigator screenOptions={{
        headerShown: false
      }}>
        <Auth.Screen name="login" component={login} />
        <Auth.Screen name="cadastro" component={cadastro} />
        <Auth.Screen name="SelecaoFamilia" component={SelecaoFamilia}
      </Auth.Navigator>
);

export default AuthRoutes;