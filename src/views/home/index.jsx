import React, { useEffect, useCallback, useState } from "react";
import { SafeAreaView, ScrollView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Header from "../../components/Header";

import { CardText, CardView, AddButton, ProdutoInput, Addcontainer} from "./styles";

import { useAuth } from "../../hooks/authcontext";
import api from "../../services/api";

const Home = () => {
    const URL_PRODUTO = '/produto?lista=';
    const URL_FAMILIA = '/familia?id=';
    
    const { signOut } = useAuth();
    const { user } = useAuth();
    const [ itens, setItens ] = useState([]);

    const logout = async () => {
        try {
            await signOut();
        } catch (error) {
             console.log(error);
        } 
    };

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
                console.log(familia.data[0]);
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

    useEffect(() => {
        carregarProdutos();
    }, [])

    return(
        <>
        <Header />

        <SafeAreaView style={{ flex: 1, padding: 10, marginTop: 10 }}>
            <ScrollView>
                {
                    itens.map(item => (
                        <CardView>
                            <CardText>Produto: { item.nome }</CardText>
                            <CardText>Quantidade: { item.qtd }</CardText>

                            { item.comprado ? (
                                    <>
                                    <MaterialCommunityIcons 
                                        name="check-circle-outline"
                                        color="#208a0a"
                                        size={22}
                                        onPress={() => comprar(item.id, item.comprado)}
                                    />
                                    </>
                                ) : (
                                    <MaterialCommunityIcons 
                                    name="circle-outline"
                                    color="#3a3a3a"
                                    size={22}
                                    onPress={() => comprar(item.id, item.comprado)}
                                    />
                                )}
                        </CardView>
                                )
                        )
                }  
                
            </ScrollView>
        </SafeAreaView>
        </>

    );    

};

export default Home;