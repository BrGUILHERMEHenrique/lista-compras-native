import React from "react";
import {Text, View, Button} from 'react-native';

import Header from "../../components/Header";
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
        <>
        <Header />
        <View>
        
        </View>
        </>

    );    

};

export default Home;