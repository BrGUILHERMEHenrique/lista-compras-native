import React, { useEffect, useCallback, useState } from "react";
import { SafeAreaView, ScrollView, Text, Alert} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from "../../components/Header";

import { CardText, CardView, Container, Button, ButtonText, 
    FormAddNewTask, Input, InputQtd, ModalContainer, ButtonModal, InputPreco, ButtonFooter, ContainerOptions} from "./styles";

import { useAuth } from "../../hooks/authcontext";
import api from "../../services/api";
import Calculos from '../../services/calculos';
import AwesomeAlert from "react-native-awesome-alerts";

const Home = () => {
    const URL_PRODUTO = '/item/porLista/';
    const URL_FAMILIA = '/familia?id=';
    
    const { user } = useAuth();
    const [ fam, setFamilia ] = useState({});
    const [ itens, setItens ] = useState([]);
    const [ produto, setNovoProduto ] = useState('');
    const [ qtd, setNewQtd ] = useState(0);
    const [ preco, setPreco ] = useState(0);
    const [ modalVisivel, setModalVisivel ] = useState(false);
    const [ item, setItem ] = useState({});
    const [ showAlert, setShowalert ] = useState(false);
    const calculos = new Calculos(); 

    const URL_UPDATE = '/item/atualizar';

    const comprar = async(id, comprado, qtd) => {
        calculos.somaValor(preco, qtd);
        setPreco(calculos.multiplicaValorDoItem(preco, qtd));

        try{
            console.log('comprado: ', !comprado);
            const response = await api.patch(
                    URL_UPDATE,
                    {
                        id: id,
                        comprado:  !comprado,
                        preco: preco
                    }
                );

                setPreco(0);
                carregarProdutos();
        }catch(e){
            console.log(e);
        }
    };

   const toggleModal = () => {
        setModalVisivel(!modalVisivel);
        if (preco <= 0 && !item.comprado) return;

        comprar(item.id, item.comprado, item.qtd);
   };

    const carregarProdutos = async () => {
        try{ 
            const familia = user.familia;
            if(!!familia){
                setFamilia(familia);
                const response = await api.get(
                    URL_PRODUTO + familia.lista.id
                    );
                
                console.log(response.data);
                setItens(response.data);
            }
        }catch(e){
            console.log('error: ', e);
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
            const response = await api.post('/item/cadastrar', prod);
            console.log(response.data);
            carregarProdutos();
            setNewQtd(0);
            setNovoProduto('');
        } catch(e){
            console.log(e);
        }
    };

   const  mostrar = () => {
            if (!itens.find(item => item.comprado == true)) {
                console.log('tem comprado');
                return true;
            } else{
                console.log('não tem nada comprado');
                return false;
            }
        };

    const excluirItem = async (itemId) => {
        try {
            await api.delete(`/produto/${itemId}`);
            carregarProdutos();
        } catch (error) {
            console.log(error.message);    
        }
    }

    const iniciarFinalizacaoDasCompras = async() => {
        try {
            let itemsNaoComprados = itens.filter(item => item.comprado == false);
            if(itemsNaoComprados.length > 0){
               setShowalert(!showAlert);
            }    
        } catch (error) {
            console.log(error);
        }
    };

    const finalizarCompras = async() => {
        try{
            const response = await api.post(`/familia/finalizarCompras/${fam.lista}`);
            carregarProdutos();
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
        <Modal
            isVisible={modalVisivel}
            animationInTiming={1500}
            animationOutTiming={1500}
            backdropTransitionInTiming={1500}
            backdropTransitionOutTiming={1500}
            > 
            <ModalContainer>             
            <Text>Adicionar preço do produto</Text>
                <InputPreco
                    value={preco}
                    onChangeText={text => setPreco(text)} 
                    keyboardType='numeric'
                    placeholder='Preço'
                />
                <ButtonModal title="Adicionar" 
                onPressOut={toggleModal}
                onPress={toggleModal} >
                    <ButtonText>Adicionar</ButtonText>
                    </ButtonModal>
            </ModalContainer>  
            </Modal>
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
        <AwesomeAlert 
            show={showAlert}
            message='Ainda exsitem items não comprados, deseja finalizar ?'
            showCancelButton={true}
            showConfirmButton={true}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={true}
            onCancelPressed={() => setShowalert(false)}
            onConfirmPressed={() => finalizarCompras()}
        />
      </FormAddNewTask>
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                {
                    itens.map(item => (
                        <CardView>
                            <CardText>{ item.nome }</CardText>
                            <CardText>Qtd: { item.qtd }</CardText>
                            <ContainerOptions>
                            <MaterialCommunityIcons 
                                        name="delete-outline"
                                        color="#860718"
                                        size={30}
                                        onPress={async () => {
                                            await excluirItem(item.id)
                                        }}
                                    />

                            { item.comprado ? (
                                    <>
                                    <MaterialCommunityIcons 
                                        name="checkbox-marked-outline"
                                        color="#208a0a"
                                        size={30}
                                        onPress={() => { 
                                            setItem(item);
                                            comprar(item.id, item.comprado, item.qtd);
                                        }}
                                    />
                                    </>
                                ) : (
                                    <MaterialCommunityIcons 
                                    name="checkbox-blank-outline"
                                    color="#3a3a3a"
                                    size={30}
                                    onPress={() =>{
                                        setItem(item); 
                                        if(!item.comprado){
                                            toggleModal();}     
                                    }}
                                    />
                                    )}
                            </ ContainerOptions>      
                        </CardView>
                                )
                        )
                }  
                
            </ScrollView>
        </SafeAreaView>
        <ButtonFooter visible={false} onPress={async() => {
            await iniciarFinalizacaoDasCompras();
        }}>
            <ButtonText>Finalizar Compra</ButtonText>
        </ButtonFooter>
        </Container>
        </>

    );    

};

export default Home;