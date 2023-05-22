import React, {useState}from 'react';
import { Text, View } from 'react-native';
import Estilo from '../Estilo';
import Filho from '../Direta/Filho';
import Filho9 from './Filho9';
// import { useState } from 'react';



export default props => {
    const [num,setNum] = useState(0)
    function exibirValor (numero){
        setNum(numero)
    }


    return(
        <>
    <Text style={Estilo.txtGrande}>{num}</Text>
        <Filho9 
        min={1}
        max={60}
        funcao= {exibirValor}
        />    
        </>
    )
    }    