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

// const URL = '/login';
const URL = '/usuarios';
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
            //Temporario para testes
            const response = await api.get(URL);

            let user = response.data.filter(data => {
                return(data.email == email && data.senha == senha);
            });


            if(user.length > 0){
                await AsyncStorage.setItem('@Lista:user', JSON.stringify(user[0]));
                setData({ user: user[0] });
            }

        } catch (e) {
            console.log(e);
        }
    }, []);

    const signOut = useCallback(async () => {
        try {
            setData({});
            await AsyncStorage.removeItem('@Lista:user');    
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