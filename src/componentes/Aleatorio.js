

// import React from 'react';
// import { Text, View, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function gerarNumeroAleatorio(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const Aleatorio = ({ min, max }) => {
//   const numeroAleatorio = gerarNumeroAleatorio(min, max);

//   return (
//     <View>
//       <Text>Número Aleatório: {numeroAleatorio}</Text>
//     </View>
//   );
// };

// export default function HomeScreen({ navigation }) {
//   return(
// <View>
// <>
// <Text>Aleatorio</Text>
// <Button title="Aleatorio" onPress={() => navigation.navigate('Aleatório')} />

// </>
// </View>



//   );
// }

// export { Aleatorio, HomeScreen };








import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * (maxo - mino + 1)) + mino;
}

const Aleatorio = ({ mino, maxo }) => {
  const numeroAleatorio = gerarNumeroAleatorio(mino, maxo);

  return (
    <View>
      <Text>Número Aleatório: {numeroAleatorio}</Text>
    </View>
  );
};

export default Aleatorio;