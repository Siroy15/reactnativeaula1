import React, { useEffect, useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';

function HomeScreen({ navigation, route }) {
  useEffect(() => {
    if (route.params?.post) {
      // Post atualizado, faça algo com `route.params.post`
      // Por exemplo, envie o post para o servidor
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Criar postagem"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Postagem: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="No que você está pensando?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Concluir"
        onPress={() => {
          // Passa e mescla os parâmetros de volta para a tela inicial
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}
