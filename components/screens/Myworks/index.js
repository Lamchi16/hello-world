import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Item from "./Item";
import Header from "../../Header/index";
import  ApplicationStyles  from "../../Themes/ApplicationStyles";
import Context from "../Context";
import  Myworks  from "../../services/Myworks";


function Mywork({ navigation }) {
	const [context, setContext] = useContext(Context);

	useEffect(() => {
		setContext([...Myworks]);
	}, []);

	return (
		<View style={ApplicationStyles.screen.container}>
			<Header
				label='Todo'
				rightComponent={<Text>ADD</Text>}
				rightButton={() =>
					navigation.navigate("InputWorks")}
					></Header>
			<View style={styles.content}>
				<FlatList
					data={context}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => {
						return <Item data={item}></Item>;
					}}></FlatList>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: "#f3f3f3",
	},
});

export default Mywork;