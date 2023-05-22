import React,{Fragment} from "react";
import {Button} from 'react-native'

export default props => {
   const test = function executar(){
        console.warn("Esta executando......")

    }
    return(
        <>
        <Button 
        title=" Olha o butããããããão 1"
        onPress={test}

        />

<Button 
        title=" Olha o butããããããão 2"
        onPress={function () {
            console.warn("Esta executando o botao dois !!!!");
        }}

        />


<Button 
        title=" Olha o butããããããão 3"
        onPress={ () => {
            console.warn("Esta executando o botao Tres !!!!");
        }}

        />

        </>
    )
}