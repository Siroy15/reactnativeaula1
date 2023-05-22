import React, { useState, useEffect } from 'react';


import { Text, View } from 'react-native';

const Aleatorio = ({route, navegation}) => {
  const [numeroAleatorio, setNumeroAleatorio] = useState(null);

  const gerarNumeroAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() ,{route.params?.max} ,{route.params?.min})
    setNumeroAleatorio(numeroAleatorio);
  };

  // Chamando a função para gerar um número aleatório quando o componente é renderizado
  React.useEffect(() => {
    gerarNumeroAleatorio();
  }, []);

  return (
    <View style >
      <Text>Número Aleatório: {route.params?.max}</Text>
    </View>
  );
};

export default Aleatorio;
