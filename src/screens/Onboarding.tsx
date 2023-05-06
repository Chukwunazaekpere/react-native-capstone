import React from "react";
import { View } from "react-native/types";
import TextsInput from "../components/TextInput";



const Profile = () => {
    const fields = ["Firstname", "Email"]
    return(
        <View>
            {
                fields.map(field => (
                    <TextsInput
                        fieldname={field}
                        key={field}
                        defaultValue={props.state.formEntries[field]}
                        keyboardType={field.toLowerCase() === 'email' ? 'email-address' : 'default'}
                        onChangeText={(value) => props.onChange(field, value)}
                    />
                ))
            }
        </View>
    )
};

export const Profile