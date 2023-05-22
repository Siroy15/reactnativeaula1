import React from "react";
import { Text } from "react-native";
import Estilo from "../Estilo";

import Menbro from "./Menbro";


export default props =>{
    return(
      <>
<Text>[começo] Menbro Famlilia: </Text>
{props.children}
<Text>------------------------------[FIM]--------------------------------
</Text>
<Text></Text>
<Text></Text>



        </>
    )
}