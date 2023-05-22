import React,{Fragment, useState} from "react";
import {Button, Text} from 'react-native'
import Estilo from "./Estilo";

export default function HomeScreen(props) {
    const { navigation } = props;

    const [numero, setNumero ] = useState(props.inicial) 
    const inc = () => setNumero (numero  + 1)
    const desc = () => setNumero (numero - 1)

    return(
        <>
            <Text style = {Estilo.txtGrande}>{numero}</Text>
            <Button title=" +" onPress={inc}/>
            <Button title=" - " onPress={desc}/>


            <Button
        title="Volte Para o Detalhes"
        onPress={() => navigation.navigate('Detalhes')}
      />



        </>
    )
}