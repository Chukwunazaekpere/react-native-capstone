import React, { useState } from "react";
import { Text, View } from "react-native";
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
        <View>
            <Header />
            <Text>Let us get to know you!</Text>
            {
                Object.keys(onboardingState.formEntries).map(field => (
                    <TextsInput
                        fieldname={field}
                        key={field}
                        defaultValue={(onboardingState.formEntries as any)[field]}
                        keyboardType={field.toLowerCase() === 'email' ? 'email-address' : 'default'}
                        onChangeText={(value) => onChange(field, value)}
                    />
                ))
            }
            <Buttons buttonLabel="Next" />
        </View>
    )
};

export default OnboardingScreen;