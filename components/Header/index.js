import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function Header({ title, onBack }) {
  const checkBackButton = () => {
    if (onBack === null) {
      return null;
    }
    return (
      <TouchableOpacity style={styles.backBtn} onPress={onBack}>
        <FontAwesome5
          name="arrow-left"
          size={30}
          color="black"
          style={styles.icon}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        {checkBackButton()}
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

Header.defaultProps = {
  title: "Header",
  onBack: null
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "#fff",
  },
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "#ffddba",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  backBtn: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  backText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
