import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import data from "../../services/Myworks";
import Header from "../../Header";
import { useNavigation } from "@react-navigation/native";

function ItemList({ data }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { idMywork: data.id })}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.id}>
            {data.id}
            {"/"}
          </Text>
          <Text style={styles.header}> {data.name} </Text>
          <Text style={styles.content}> {data.content} </Text>
          <Text style={[styles.time, { textTransform: "capitalize" }]}>
            Time: {data.time}
          </Text>
          <Text style={styles.last}> Last: {data.last} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function Myworks({ navigation }) {
  return (
    <View style={styles.waper}>
      <Header title="MY WORKS"></Header>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemList data={item}> </ItemList>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  waper: {
    flex: 1,
  },
  container: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    borderRadius: 7,
    overflow: "hidden",
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "black",
    textTransform: "uppercase",
  },
  date: {
    fontSize: 10,
    marginBottom: 10,
    fontStyle: "italic",
    textTransform: "capitalize",
  },
  time: {
    fontStyle: "italic",
    fontSize: 10,
    marginTop: 10,
    textTransform: "capitalize",
    marginLeft: 10,
  },
  last: {
    fontSize: 10,
    marginBottom: 10,
    marginLeft: 10,
    textTransform: "capitalize",
  },
  id: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
export default Myworks;
