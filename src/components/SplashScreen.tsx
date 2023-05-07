import React from "react"
import { Dimensions, Image, StyleSheet, View } from "react-native"
const LittleLemonLogo = require("../assets/images/Logo.png")

const dimensions = Dimensions.get("screen")
const SplashScreen = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={LittleLemonLogo} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        resizeMode: "cover",
        height: dimensions.height/12,
        width: dimensions.width/1.2
    }
})
export default SplashScreen