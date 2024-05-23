import React from "react";
import {View, Text} from "reactie-native";

export default function ResultImc(props){
    return (
        <View> 
            <Text>{props.messageResultImc}</Text>
            <Text>{props.ResultImc}</Text>
        </View>
    );
}