import React, { useState } from "react";
import { View } from "react-native";
import TextsInput from "../components/TextInput";



const Profile = () => {
    const [profileState, setProfileState] = useState({
        formEntries: {
            "Firstname": "", 
            "Lastname": "", 
            "Email": "", 
            "Phone": ""
        }
    });
    const onChange = (field: string, value: string) => {

    }
    return(
        <View>
            {
                Object.keys(profileState.formEntries).map(field => (
                    <TextsInput
                        fieldname={field}
                        key={field}
                        defaultValue={(profileState.formEntries as any)[field]}
                        keyboardType={field.toLowerCase() === 'email' ? 'email-address' : 'default'}
                        onChangeText={(value) => onChange(field, value)}
                        secureTextEntry={field.toLowerCase() === 'password' ? true : false}
                    />
                ))
            }
        </View>
    )
};

export default Profile;