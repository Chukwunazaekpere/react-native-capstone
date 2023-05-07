import React from "react"
import { Image, StyleSheet } from "react-native"
const LittleLemonLogo = require("../assets/images/Logo.png")

const SplashScreen = () => {
    return(
        <Image style={styles.container} source={LittleLemonLogo} />
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
        resizeMode: "contain"
    }
})
export default SplashScreen