import React, { useEffect, useCallback, useState } from 'react';
import { Link } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useAuth } from '../../hooks/authcontext';

import { Container, Button, Input, ButtonText } from './styles';

const login = () => {
    const { signIn } = useAuth();

    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');

    const login = async () => {
        await AsyncStorage.removeItem('@Lista:token');
        if(!email || !senha) return;
        console.log('Fazeno login');
        try{
            await signIn({
                email: email,
                senha: senha
            });
        }
        catch(e){
            console.log(e);
        }

    }
    return(
        <Container>
            <Input
                placeholder='Email'
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <Input
                placeholder='Senha'
                onChangeText={text => setSenha(text)}
                value={senha}
            />
            <Button
                onPress={() => login()}
            >
                <ButtonText>
                    Login
                </ButtonText>
            </Button>
            <Link
                to={{ screen:'cadastro' }}
            > Novo cadastro</Link>

        </Container>
        
    );


};

export default login;