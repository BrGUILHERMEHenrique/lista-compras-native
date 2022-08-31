import React, { useCallback, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Container, Button, ButtonText, Input} from './styles';

import api from '../../services/api';

const cadastro = () => {
	const [ email, setEmail ] = useState('');
	const [ senha, setSenha ] = useState('');
	const [ nome, setNome ] = useState('');

	const realizarCadastro = async() => {
		try{
			const response = await api.post('usuario/cadastrar', {
				nome,
				email, 
				senha
			});

			if (response.status = 200){
				await AsyncStorage.setItem('@Lista:token', response.data);
			};

		} catch(error){
			console.log(error);
		}
	}


	return(
		<Container>
			<Input 
				placeholder='Email'
				onChangeText={text => setEmail(text)}
				value={email}/>
			<Input 
				placeholder='Nome'
				onChangeText={text => setNome(text)}
				value={nome}/>
			<Input 
				placeholder='Senha'
				onChangeText={text => setSenha(text)}
				value={senha}/>

			<Button>
				<ButtonText> Finalizar cadastro </ButtonText>
			</Button>

		</Container>
		);
}

export default cadastro;