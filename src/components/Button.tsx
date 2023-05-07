import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { dimension } from "./MenuScreen";


interface ButtonInterface {
    buttonLabel: string
    styles?: any
}
const Buttons = (props: ButtonInterface) => {
    return(
        <TouchableOpacity style={{...styles.container, ...props.styles}}>
            <Text style={{fontWeight: "bold", color: "#fff", fontSize: 17}}>{props.buttonLabel}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 15,
        paddingVertical: 12,
        alignItems: "center",
        width: dimension.width/4
        // marginHorizontal: 20
    },
    texts: {

    }
})
export default Buttons;