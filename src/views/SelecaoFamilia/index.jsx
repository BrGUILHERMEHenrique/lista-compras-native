import React, { useState, useCallback } from 'react';

import { Container, Button, ButtonText, Input } from 'styles';


const selecaoFamilia = () => {
	const [ idFamilia, setIdFamilia ] = useState('');
	const [ login, setLogin ] = useState('');


	return(
			<Container>

				<ButtonText> Hello World! <ButtonText/>

			<Container/>
		)
};

export default selecaoFamilia;