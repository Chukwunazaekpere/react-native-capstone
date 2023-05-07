import componentStyles from "../assets/componentStyles";
import React from "react";
import { TextInput, KeyboardType, StyleSheet, View, Text, StyleProp } from "react-native";


interface TextInputInterface {
    onChangeText: (text: string) => void
    fieldname: string
    keyboardType: KeyboardType
    defaultValue: string
    secureTextEntry?: boolean
    style?: any
}
const TextsInput = (props: TextInputInterface) => {
    return(
        <View>
            <Text style={{...componentStyles.fieldText, ...styles.labelStyle}}>{props.fieldname}</Text>
            <TextInput
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
                style={styles.texts}
                defaultValue={props.defaultValue}
                placeholder={props.fieldname}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    texts: {
        borderWidth: 2,
        borderRadius: 20,
        marginVertical: 10,
        paddingVertical: 15,
        fontSize: 20,
        paddingHorizontal: 20,
        fontFamily: 'ANB-B',
    },
    labelStyle: {
        paddingLeft: -10
    }
})
export default TextsInput;