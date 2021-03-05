import React from "react";
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

function Signup(navigation) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.textTitle}> Create Your Account </Text>{" "}
        <View style={styles.textInputContainer}>
          <FontAwesome5
            name="user-alt"
            size={20}
            color="black"
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Username"
          ></TextInput>
        </View>
        <View style={styles.textInputContainer}>
          <FontAwesome5
            name="envelope"
            size={20}
            color="black"
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholder="Email"
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
            placeholder="Enter the Password"
            secureTextEntry={true}
          ></TextInput>
        </View>
        
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginButtonTitle}> SING UP </Text>
        </TouchableOpacity>
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
  textTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#ffddba",
  },
  textInputContainer: {
    paddingHorizontal: 10,
    backgroundColor: "rgba(0,0,0,.1)",
    borderRadius: 20,
    marginBottom: 15,
    fontSize: 20,
  },
  textInput: {
    width: 280,
    height: 40,
    paddingLeft: 5,
    marginLeft: 40,
    borderRadius: 20,
  },
  icon: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 8,
    left: 12,
  },
  loginButton: {
    width: 340,
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
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  successTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
  buttonStyle: {
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
});
export default Signup;
