import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function DetailsScreen({ navigation }) {



  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="ree Abra"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Cont" onPress={() => navigation.navigate('Contador')} />
      <Button title="Ale" onPress={() => navigation.navigate({
        name: "Aleatorio",
        params: {max: 20, min: 10}
      })} />
      <Button title="Volte" onPress={() => navigation.goBack()} />
    </View>
  );
}