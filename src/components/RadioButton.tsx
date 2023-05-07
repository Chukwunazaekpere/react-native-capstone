import React from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import componentStyles from "../assets/componentStyles";



interface RadioButtonInterface {
    labelname: string
    backgroundColor: string
}
const RadioButtons = (props: RadioButtonInterface) => {
    return(
        <View style={styles.container}>
            <View
                style={{...styles.input, backgroundColor: props.backgroundColor ? props.backgroundColor : colors.white}}
            />
            <Text style={componentStyles.fieldText}>{props.labelname}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        borderRadius: 40,
        borderWidth: 1,
        width: 40,
        height: 40
    },
    container: {
        borderWidth: 2.5,
        paddingHorizontal: 10,
        borderRadius: 50,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center"
    }
});


export default RadioButtons;