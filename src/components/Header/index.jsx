import React, { useCallback, useEfect, useState } from 'react';

import { Container, NameText, LogoutButton } from './styles';

import { useAuth } from '../../hooks/authcontext';

const Header = () => {

    const { signOut } = useAuth();
    const { user } = useAuth();

    return(
        <Container>
            <NameText>
                Bem vindo, { user.nome }.
            </NameText>

            <LogoutButton
                onPress={async () => await signOut()}
                Title='Sair'
            >
                <NameText>
                    Sair
                </NameText>
            </LogoutButton>
        </Container>
    )
};

export default Header;