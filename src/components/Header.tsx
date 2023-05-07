import React from "react"
import { View, Image } from "react-native";
const HeaderLogo = require("../assets/images/Logo.png");


const Header = () => {
    return(
        <View>
            <Image source={HeaderLogo} />
        </View>
    )
};


export default Header;