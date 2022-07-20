import React, { useCallback, useEfect, useState } from 'react';

import { Container, NameText, LogoutButton } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useAuth } from '../../hooks/authcontext';

const Header = () => {

    const { signOut } = useAuth();
    const { user } = useAuth();

    return(
        <Container>
            <NameText>
                Bem vindo, { user.nome }.
            </NameText>

            <MaterialCommunityIcons 
                name="logout-variant" 
                size={24} color="black" 
                onPress={async () => await signOut()}
                Title='Sair'
            />
        </Container>
    )
};

export default Header;