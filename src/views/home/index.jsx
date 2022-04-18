import React from "react";
import {Text, View, Button} from 'react-native';

import { useAuth } from "../../hooks/authcontext";

const Home = () => {
    
    const { signOut } = useAuth();
    
    const logout = async () => {
        try {
            await signOut();
        } catch (error) {
             console.log(error);
        } 
    };

    return(
    <View>
        <Text>
            Home, aqui estamos
        </Text>
        <Button
            title="sair"
            onPress={ () => logout()}
        >
        </Button>
        </View>
    );    

};

export default Home;