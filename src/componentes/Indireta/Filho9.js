import React from 'react';
import { Text, View,Button } from 'react-native';
import Estilo from '../Estilo';

export default props => {
function gerarNumero(min,max){
        const fator = max - min + 1
        return parseInt (Math.random() * fator) + min
}

return(
    <>
 <Button 
    title= "EXECUTARRRRR !!!!!!!!"
    onPress = {function () {
       const n = gerarNumero (props.min, props.max )
        props.funcao(n)

    }}
    
    />


    </>
)


}