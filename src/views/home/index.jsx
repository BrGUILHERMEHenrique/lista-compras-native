import React, { useEfect, useCallback, useState } from "react";
import {Text, View, Button} from 'react-native';

import Header from "../../components/Header";
import Card from "./../components/Card";

import { useAuth } from "../../hooks/authcontext";
import api from "../../services/api";

const Home = () => {
    const URL = '/produtos?lista=';
    const URL = '/familia?id=';
    
    const { signOut } = useAuth();
    const { user } = useState();
    const [ itens, setItens ] = useState([]);

    const logout = async () => {
        try {
            await signOut();
        } catch (error) {
             console.log(error);
        } 
    };

    const carregarProdutos = async () => {
        try{
            const familia = await api.get(URL + user.familia);
            const response = await api.get(
                    URL + familia.lista
                );
            console.log(response.data);

            setItens(response.data);
        }catch(e){
            console.log(e);
        }
    };

    useEfect(() => {
        carregarProdutos();
    }, [])

    return(
        <>
        <Header />
        <View>
            {
                itens.Length <= 0 ? 'Nada aqui por enquanto' : itens.map(item => 
                        return(
                                <Card id={item.id} nome={item.nome} qtd={item.qtd} comprado={item.comprado}>
                            )
                    )
            }    
        </View>
        </>

    );    

};

export default Home;