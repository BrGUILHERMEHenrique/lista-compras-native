import React,
{
    useContext,
    useState,
    useCallback,
    useEffect,
    createContext
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

const URL_LOGIN = '/login';
const URL_PADRAO = '/usuario';
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [data, setData] = useState({});

    useEffect( () => {
        async function loadUser () {
            const user = await AsyncStorage.getItem('@Lista:user');
            if(user){
                setData({ user: JSON.parse(user) });
            }
        }

        loadUser();

    }, []);


    const signIn = useCallback(async ({ email, senha }) => {
        try {
            console.log('Fazendo requisição');
            const response = await api.post(URL_PADRAO+URL_LOGIN, {
                email,
                senha
            });

            console.log(response.headers);

            let user = response.data;
            let header = 'Bearer ' + response.headers.token;
            console.log('token: ', header);

            if(user){
                await AsyncStorage.setItem('@Lista:user', JSON.stringify(user));
                setData({ user });
                console.log(header);
                await AsyncStorage.setItem('@Lista:token', header);
            }

        } catch (e) {
            console.log(e);
        }
    }, []);

    const signOut = useCallback(async () => {
        try {
            setData({});
            await AsyncStorage.removeItem('@Lista:user');  
            await AsyncStorage.removeItem('@Lista:token');
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    return(
        <AuthContext.Provider
            value={{ user : data.user, signIn, signOut }}
            >
                {children}
            </AuthContext.Provider>
    );
  
}

      
function useAuth() {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
  }

export { AuthProvider, useAuth };