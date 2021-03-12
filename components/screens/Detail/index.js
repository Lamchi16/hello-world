import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Myworks from "../../services/Myworks";
import Header from "../../Header";

function Detail({ navigation, route }) {
  const { idMywork } = route.params;
  const mywork = Myworks.filter((item) => item.id === idMywork)[0];
  console.log(mywork);

  return (
    <View style={styles.waper}>
      <Header onBack={() => navigation.goBack()} title="Detail"></Header>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.item}>
            <Text style={styles.title}>{mywork.name}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.content}>{mywork.content}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.content}>{mywork.time}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.content}>{mywork.last}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  waper: {
    flex: 1,
  },
  container: {
    flex: 1,
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

  item: {
    marginHorizontal: 16,
    marginVertical: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
export default Detail;
