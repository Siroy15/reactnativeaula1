import React, {useState} from "react";
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 {/*import Primeiro from './componentes/Primeiro'
 import Of, {Comp1, Comp2} from './componentes/MultiplosComponentes'
 import MinMAX from "./componentes/MinMAX";
 import Aleatorio from "./componentes/Aleatorio";
 import Titulo from "./componentes/Titulo";
 import Botao from "./componentes/Botao";
// import Contadores from "./componentes/Contadores";
// import Calendario from "./componentes/Calendario";
// import Pai from "./componentes/Direta/Pai";
// import Pai9 from "./componentes/Indireta/Pai9";
import contadorV2 from "./componentes/contador/ContadorDisplay";
import ContadorV2 from "./componentes/contador/ContadorV2";*/}
// import HomeScreen from "./HomeScreen";
// import DetailsScreen from "./DetailScreen";
// import Principal from "./componentes/Licao/Principal";
// import Detalhe from "./componentes/Licao/Detalhe";
// import ContadorDisplay from "./componentes/contador/ContadorDisplay";
// import ContadorV2 from "./componentes/contador/ContadorV2";
// import Aleatorio from "./componentes/Aleatorio";
// import Aleatorio2 from "./componentes/Licao/Aleatorio2";
// import Teste from "./componentes/Licao/Teste";
// import Familia from "./componentes/relacao/Familia";
// import Menbro from "./componentes/relacao/Menbro";
import { SafeAreaView } from "react-native-safe-area-context";
import Quadrado from "./componentes/layout/Quadrado";
// import ListaProdutos from "./componentes/produto/ListaProdutos";
// import ListaProdutoV2 from "./componentes/produto/ListaProdutoV2";
import FlexBoxV1 from "./componentes/layout/FlexBoxV1";
import FlexNBoxV2 from "./componentes/layout/FlexNBoxV2";
import FlexBoxV3 from "./componentes/layout/FlexBoxV3";







const Stack = createNativeStackNavigator()


export default () => (
<SafeAreaView  style={ styles.TelaIniciante}>


{/* <FlexBoxV1/> */}
<FlexBoxV3/>

 </SafeAreaView>


 



  
        // <NavigationContainer>
        //      <Stack.Navigator>
        //          <Stack.Screen name="Detalhe" component={Detalhe}/>
        //         <Stack.Screen name="Contador" component={ContadorV2}/>
        //          <Stack.Screen name="Aleatorio" component={Aleatorio2}/>
                
        //      </Stack.Navigator>
        // </NavigationContainer> 





)


const styles = StyleSheet.create({
    TelaIniciante : {

        flexGrow : 1,
        justifyContent : 'center',
        alignItems : 'center',
         padding: 14,

    }








})
//lista de comentarios

// function App(){
//     const jsx = <Text>Walison Dantas</Text>
//     return jsx
// }


// const App = function () {
//     return <Text>Componente 2</Text>
// }


// export default function() {
//     return <Text>Walison Dantas</Text>
// }



// export default () => {
//     return <Text>Walison Dantas</Text>
// }


// export default App



{/* 
<ListaProdutoV2/> */}





{/* <ListaProdutos/> */}





 {/* <Familia    >

<Menbro nome= "Jorge" sobrenome="Pereira" />
<Menbro nome= "Edinaldo" sobrenome="Pereira" />
<Menbro nome= "Jorge" sobrenome="Pereira" />
<Menbro nome= "Jorge" sobrenome="Pereira" />

 </Familia>
 

 <Familia >

<Menbro nome= "lucas" sobrenome="Jabuti" />
<Menbro nome= "Edinaldo" sobrenome="Jabuti" />
<Menbro nome= "Jorge" sobrenome="Jabuti" />
<Menbro nome= "Jorge" sobrenome="Jabuti" />

 </Familia> */}




{/* <ContadorV2/> */}


   {/* <Pai/>
<Pai9/> */}



  {/* <Calendario/> */}



   {/* <Botao/> 

      <Titulo principal="Cadastro Produto"
            secundario ="Tela de Cadastro" ></Titulo> */}




  {/* <Primeiro/>

        <Text  >1+2</Text>
        <Text> É igual a = {2+7}</Text>
        <Comp1/>
        <Comp2/>
        <Of/> 

        <MinMAX min= "20" max ="3"  />
        <MinMAX min= "8" max = "40" />
        <MinMAX min= "7" max = "55" />
         <Aleatorio mino={1} maxo={99999999} /> */}
         
         
         //<View style = {Styles.TelaIniciante} >

// <Contadores inicial= {100}/>
