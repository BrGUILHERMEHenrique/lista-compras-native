import React, { useEffect, useCallback, useState } from "react";
import { SafeAreaView, ScrollView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Header from "../../components/Header";

import { CardText, CardView, Container, Button, ButtonText, FormAddNewTask, Input, InputQtd} from "./styles";

import { useAuth } from "../../hooks/authcontext";
import api from "../../services/api";

const Home = () => {
    const URL_PRODUTO = '/produto?lista=';
    const URL_FAMILIA = '/familia?id=';
    
    const { signOut } = useAuth();
    const { user } = useAuth();
    const [ fam, setFamilia ] = useState({});
    const [ itens, setItens ] = useState([]);
    const [ produto, setNovoProduto ] = useState('');
    const [ qtd, setNewQtd ] = useState(0);

    const URL_UPDATE = '/produto';
    const comprar = async(id, comprado) => {
        try{
            console.log(id, comprado)
            const response = await api.patch(
                    URL_UPDATE + `/${id}`,
                    { comprado:  !comprado}
                );
                console.log(response.data);
                carregarProdutos();
        }catch(e){
            console.log(e);
        }
    };

    const carregarProdutos = async () => {
        try{
            const familia = await api.get(URL_FAMILIA + user.familia);

            if(!!familia){
                setFamilia(familia.data[0]);
                const response = await api.get(
                    URL_PRODUTO + familia.data[0].lista
                    );
                console.log(familia.data);
                console.log(response.data);


                setItens(response.data);
            }
        }catch(e){
            console.log(e);
        }

    };

    const AdicionarProduto = async () => {
        if(!produto || qtd == 0){
            return;
        }
        const prod = {
            lista: fam.lista,
            nome: produto,
            preço: 0,
            qtd: qtd,
            comprado: false
        }
        try{
            const response = await api.post('/produto', prod);
            console.log(response.data);
            carregarProdutos();
            setNewQtd(0);
            setNovoProduto('');
        } catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        carregarProdutos();
    }, [])

    return(
        <>
        <Header />
        <Container>
        <FormAddNewTask>
            <Input 
                value={produto}
                onChangeText={text => setNovoProduto(text)}
                placeholder="produto..."
            />
            <InputQtd
                keyboardType='numeric' 
                value={qtd}
                onChangeText={text => setNewQtd(text)}
                placeholder="quantidade..."
            />

        <Button onPress={() => AdicionarProduto()}>
          <ButtonText>
              Criar
          </ButtonText>
        </Button>
      </FormAddNewTask>
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                {
                    itens.map(item => (
                        <CardView>
                            <CardText>{ item.nome }</CardText>
                            <CardText>Qtd: { item.qtd }</CardText>

                            { item.comprado ? (
                                    <>
                                    <MaterialCommunityIcons 
                                        name="check-circle-outline"
                                        color="#208a0a"
                                        size={30}
                                        onPress={() => comprar(item.id, item.comprado)}
                                    />
                                    </>
                                ) : (
                                    <MaterialCommunityIcons 
                                    name="circle-outline"
                                    color="#3a3a3a"
                                    size={30}
                                    onPress={() => comprar(item.id, item.comprado)}
                                    />
                                )}
                        </CardView>
                                )
                        )
                }  
                
            </ScrollView>
        </SafeAreaView>
        </Container>
        </>

    );    

};

export default Home;