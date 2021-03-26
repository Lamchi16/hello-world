import React, { useState, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
  StyleSheet
} from "react-native";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import Header from "../../Header/index";
import Context from "../Context";
import { useNavigation } from "@react-navigation/native";

function ItemInputWork({ value, onChange, index }) {
  return (
    <TextInput
      onChangeText={(text) => onChange(text, index)}
      style={[styles.input, styles.inputWork]}
      value={value}
    ></TextInput>
  );
}
ItemInputWork.defaultProps = {
  value: "",
  onChange: () => {},
  index: -1,
};
function AddWork(props) {
  const [context, setContext] = useContext(Context);
  const [title, setTitle] = useState("");
  const [listWork, setListWork] = useState([]);
  const navigation = useNavigation();

  const handleAdd = () => {
    if (!title.trim()) {
      //tiêu đề trống
      return Alert.alert("Empty name of work.");
    }

    if (listWork.length === 0) {
      //Nội dung trống
      return Alert.alert("Content is empty.");
    }

    var time = new Date();
    const currentTime = `${time.getHours()}:${time.getMinutes()} ${time.getDate()}/${
      time.getMonth() + 1
    }/${time.getFullYear()}`;
    setContext((state) => [
      ...state,
      {
        id: context.length + 1,
        name: title,
        content: listWork,
        time: currentTime,
      },
    ]);
    navigation.navigate("Mywork");
  };

  const handleAddItemWork = () => {
    setListWork((state) => {
      return [...state, ""];
    });
  };

  const handleChangeText = (text, index) => {
    if (index === -1) {
      return setListWork([text]);
    }

    setListWork((state) => {
      const cloneList = [...state];
      cloneList[index] = text;
      return cloneList;
    });
  };

  const renderItemWork = () => {
    if (listWork.length < 2) {
      return (
        <ItemInputWork
          onChange={handleChangeText}
          index={-1}
          value={listWork[0]}
        ></ItemInputWork>
      );
    }

    return (
      <>
        {listWork.map((item, index) => {
          return (
            <ItemInputWork
              onChange={handleChangeText}
              index={index}
              key={index.toString()}
              value={item}
            ></ItemInputWork>
          );
        })}
      </>
    );
  };

  return (
    <View style={ApplicationStyles.screen.container}>
      <Header
        goBack={() => navigation.goBack()}

      ></Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.header}>Name of work</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          ></TextInput>

          <View style={styles.inputGroup}>
            <Text style={styles.header}>Content</Text>
            {renderItemWork()}
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddItemWork}
            >
              <Text>+1 Item</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={handleAdd}>
            <Text style={styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
      flex: 1,
      paddingHorizontal: 16,
      marginTop: 16
  },
  text: {
      fontSize: 17,
      maxWidth: 250
  },
  row: {
      height: 40,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,.1)',
  },
  total: {
      fontSize: 17,
      fontWeight: 'bold'
  },
  footer: {
      width: '100%',
      marginTop: 70
  },
  button: {
      backgroundColor: '#000',
      marginHorizontal: 16,
      height: 40,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
  },
  buttonText: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold',
  },
  input: {
      height: 40,
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.1)',
      borderRadius: 7,
      paddingHorizontal: 8,
  marginTop:20
  },
  header: {
      marginBottom: 5
  },
  inputGroup: {
      marginTop: 20,
  marginBottom:20
  },
  addButton: {
      height: 40,
      width: '100%',
      borderRadius: 7,
      borderWidth: 1,
      borderColor: '#000',
      borderStyle: 'dashed',
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center'
  },
  inputTodo: {
      marginTop: 10
  }
});

export default AddWork;

