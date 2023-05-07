import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TextsInput from "../components/TextInput";
import Header from "../components/Header";
import Buttons from "../components/Button";


const OnboardingScreen = () => {
    const [onboardingState, setOnboardingState] = useState({
        formEntries: {
            "Firstname": "", 
            "Email": "", 
        }
    })
    const onChange = (field: string, value: string) => {

    }
    return(
        <View style={styles.container}>
            <Header />
            <Text style={{textAlign: "center", fontSize: 20, marginVertical: 12}}>Let us get to know you!</Text>
            {
                Object.keys(onboardingState.formEntries).map(field => (
                    <TextsInput
                        fieldname={field}
                        key={field}
                        style={styles.texts}
                        defaultValue={(onboardingState.formEntries as any)[field]}
                        keyboardType={field.toLowerCase() === 'email' ? 'email-address' : 'default'}
                        onChangeText={(value) => onChange(field, value)}
                    />
                ))
            }
            <View style={{justifyContent: "flex-end", flexDirection: "row"}}>
                <Buttons styles={styles.button} buttonLabel="Next" />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        marginHorizontal: 20
    },
    texts: {

    },
    button: {
        backgroundColor: "blue"
    }
})
export default OnboardingScreen;