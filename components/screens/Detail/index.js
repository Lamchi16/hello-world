import React, {
	useContext,
	useState,
	useEffect,
} from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView,StyleSheet } from "react-native";
import Header from "../../Header/index";
import ApplicationStyles from "../../Themes/ApplicationStyles";
import Context from "../Context";

function Detail({route }) {
	const { idMywork } = route.params;
	const [work, setWork] = useState({});
	const [context, setConText] = useContext(Context);
	const navigation = useNavigation();
	useEffect(() => {
		const work = context.find(
			(item) => item.id === idMywork.id
		);
		setWork(work);
	}, []);
	return (
		<View style={ApplicationStyles.screen.container}>
			<Header
				goBack={() => navigation.navigate("Mywork")}
				label={work.name}></Header>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.content}>
					<Text
						style={{
							fontSize: 25,
							marginBottom: 20,
						}}>
						{work.name}
					</Text>
					{work &&
						work.content &&
						work.content.map((item, index) => {
							return (
								<View
									key={index.toString()}
									style={{
										flexDirection: "row",
										alignItems: "center",
										marginBottom: 10,
									}}>
									<View
										style={{
											height: 10,
											width: 10,
											backgroundColor: "#000",
											borderRadius: 5,
											marginRight: 5,
										}}></View>
									<Text>{item}</Text>
								</View>
							);
						})}
					<Text
						style={{
							fontSize: 13,
						}}>
						Time create: {work.time}
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	content: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 10,
	},
	marginItem: {
		margin: 10,
	},
});

export default Detail;