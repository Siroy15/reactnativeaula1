import React from 'react';
import { Text, View } from 'react-native';
import Estilo from '../Estilo';

export default props => {

     return (
        <>

            <Text style={Estilo.txtGrande}>
                {props.a}
            </Text>

            <Text style={Estilo.txtGrande}>
                {props.b}
            </Text>

        </>
     )

 }