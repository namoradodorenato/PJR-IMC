import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./Resultlmc";


export default function Form(){

  

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessage] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")
 
        function imcCalcular(){
            return setImc((weight/(height*height)).toFixed(2))
        }

        function validationImc(){
            if(weight != null && height != null){
                imcCalcular()
                setHeight(null)
                setWeight(null)
                setMessage(" seu IMC é = ")
                setTextButton("Calcular Novamente")
                return
            }
            setImc(null)
            setTextButton("Preencha o peso e altura")
        }

    return(
        <View>
          
        <View>  
            <Text>Altura</Text>
            <TextInput
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
            />
            <Text>Peso</Text>
            <TextInput
            onChangeText={setweight}
            value={weight}
            placeholder="75.865"
            keyboardType="numeric"
            />

            <Button
            onPress={() => validationImc ()}
           title={textButton}
            />

        </View>
            <ResultImc
            messageResultImc = {messageImc}
            ResultImc = {imc}
            />
        </View>
    );
}