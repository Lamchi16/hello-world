import React from "react";
import {Text,
StyleSheet,
View,
Image} from "react-native";

function Splash({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.logoSplash}>
                <Image style={styles.logo}
                source={require("../../img/logo.png")}
                >
                </Image>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
container:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#ffddba",
},
logoSplash:{
    alignItems: 'center',
    justifyContent: 'center',
},
logo:{
    
    resizeMode: "contain",
    width: 500,
    height: 100,
},
title:{
    fontSize: 15,
    color: 'back'
} 
})
export default Splash;