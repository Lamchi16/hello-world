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
                source={require("../../img/splash.png")}
                >
                </Image>
            </View>
            <Text style={styles.title}>Smart Notes</Text>
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor:"#ffddba",
    flexDirection: 'column'
},
logoSplash:{
    alignItems: 'center',
    justifyContent: 'center',
},
logo:{
    width: 128,
    height: 50,
},
title:{
    fontSize: 15,
    color: 'back'
} 
})
export default Splash;