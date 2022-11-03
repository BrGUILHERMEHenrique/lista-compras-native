import React, { useState, useCallback } from 'react';
import api from '../../services/api';

import { Container, Button, ButtonText, Input, Label } from './styles';


const selecaoFamilia = () => {
	const [ idFamilia, setIdFamilia ] = useState('');
	const [ login, setLogin ] = useState('');

	const buscarFamiliaEAtualizarUsuario = async () => {
		let url = '';

		if(!!login){
			url = `/usuario/email`;
			let email = login;
			let objReq = { email: email }

			console.warn(email);
			console.warn(objReq);
			const response = await api.post(url, objReq);
			console.log('fiz a primeira sem erro');

			if (response.status != 404 && !!response.data){
				await api.patch('/usuario/atualizar', {familia: response.data.familia})
			}
			return;
		}


		const resFamilia = await api.get(url);

		if(resFamilia != 404){
			const resUsuario = await api.patch('/usuario/atualizar', {familia : idFamilia});

		}
	}


	return(
			<Container>

			<Label> Usar codigo da familia: </Label>
			<Input 
				onChangeText={text => setIdFamilia(text)}
				value={idFamilia}
			/>

			<Label> Procurar familia por usuario: </Label>
			<Input 
				onChangeText={text => setLogin(text)}
				value={login}
			/>

			<Button
				onPress={() => buscarFamiliaEAtualizarUsuario()}
			> 
				<ButtonText> Adicionar e continuar.</ButtonText>
			</Button>

			<Button> 
				<ButtonText> Cadastrar nova familia.</ButtonText>
			</Button>

			</Container>
		)
};

export default selecaoFamilia;