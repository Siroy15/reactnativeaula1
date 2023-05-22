import React, { useState} from 'react';
import { Text, View } from 'react-native';
import Estilo from '../Estilo';
import ContadorDisplay  from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';


export default function HomeScreen(props) {
    const { navigation } = props;

    const [num, setNum] =  useState(0)

    const inc = () => setNum (num + 1)
    const desc = () => setNum (num - 1)

    

    return (

            <>

            <Text style = {Estilo.txtGrande}>

            contador

            </Text>
            <ContadorDisplay num={num}/>
            <ContadorBotoes inc={inc} desc={desc} />

            

            </>
            



    )
}