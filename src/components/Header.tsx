import React from "react"
import { View, Image, StyleSheet } from "react-native";
const HeaderLogo = require("../assets/images/Logo.png");


const Header = () => {
    return(
        <View style={style.container}>
            <Image source={HeaderLogo} />
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
export default Header;