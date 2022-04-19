import React, { useCallback, useEfect, useState } from 'react';

import { Container, StyledText, StyledButton } from './styles';

import api from '../../services/api';

const Card = ({ props }) => {

    const { nome } = props;
    const { qtd } = props;
    const { comprado } = props;
    const { id } = props;

    const URL = '/produto';

    const comprar = async() => {
        try{
            const response = await api.patch(
                    URL,
                    { comprado: True }
                );
        }catch(e){
            console.log(e);
        }
    };

    return(
        <Container>
            <StyledText>
                { nome }
            </StyledText>
            <StyledText>
                Quantidade: { qtd }
            </StyledText>


            <StyledButton>
                <StyledText>
                    Comprar
                </StyledText>
            </StyledButton>   
        </Container>
    )
};

export default Card;