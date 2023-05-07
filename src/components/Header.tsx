import React from "react"
import { View, Image, StyleSheet } from "react-native";
const HeaderLogo = require("../assets/images/Logo.png");


const Header = () => {
    return(
        <View>
            <Image source={HeaderLogo} />
        </View>
    )
};

const style = StyleSheet.create({
    
})
export default Header;