import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import User from "../../services/Users";

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() === "") {
      return Alert.alert("Enter your Username.");
    }
    if (password.trim() === "") {
      return Alert.alert("Enter your Password.");
    }
    if (username !== User.username || password !== User.password) {
      return Alert.alert("Email or Password incorrect !");
    }
    navigation.navigate("Myworks");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
          
        <View style={styles.up}>
          <Image
            source={require("../../img/todolist.png")}
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.down}>
          <View style={styles.textInputContainer}>
            <FontAwesome5
              name="user-alt"
              size={20}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholder="Email"
              onChangeText={(text) => setUsername(text)}
            ></TextInput>
          </View>
          <View style={styles.textInputContainer}>
            <FontAwesome5
              name="unlock-alt"
              size={20}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonTitle}> SIGN IN </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.textSignUp}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.textLogin}> Haven 't account? Sing up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    resizeMode: "contain",
    width: 300,
    height: 100,
  },

  textInputContainer: {
    backgroundColor: "rgba(0,0,0,.1)",
    borderRadius: 20,
    marginBottom: 15,
    fontSize: 20,
    position: "relative",
  },
  up: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  down: {
    flex: 7,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textInput: {
    width: 280,
    height: 40,
    paddingLeft: 10,
    marginLeft: 40,
  },
  loginButton: {
    width: 320,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffddba",
  },
  loginButtonTitle: {
    fontSize: 18,
    color: "#7d7c7b",
  },
  textSignUp: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 20,
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  icon: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 8,
    left: 12,
  },
});

export default Login;
