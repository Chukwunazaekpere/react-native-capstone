import React from "react";
import { Text, TouchableOpacity } from "react-native";


interface ButtonInterface {
    buttonLabel: string
}
const Buttons = (props: ButtonInterface) => {
    return(
        <TouchableOpacity>
            <Text>{props.buttonLabel}</Text>
        </TouchableOpacity>
    )
};


export default Buttons;