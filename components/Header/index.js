
import React from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";

function Header({
	label,
	goBack,
	rightButton,
	rightComponent,
}) {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				{goBack && (
					<TouchableOpacity
						onPress={goBack}
						style={styles.back}>
						<Text style={styles.backBtn}>Back</Text>
					</TouchableOpacity>
				)}

				<Text style={styles.header} numberOfLines={1}>
					{label}
				</Text>

				{rightButton && (
					<TouchableOpacity
						onPress={rightButton}
						style={styles.right}>
						<Text style={styles.btnAdd}>Add</Text>
					</TouchableOpacity>
				)}
			</View>
		</SafeAreaView>
	);
}

Header.defaultProps = {
	label: "Header",
	goBack: null,
	rightButton: null,
};

const styles = StyleSheet.create({
	container: {
		height: 60,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderBottomColor: "rgba(0,0,0,.1)",
		borderBottomWidth: 1,

		marginTop: 20,
	},
	header: {
		fontSize: 25,
		fontWeight: "bold",
		marginHorizontal: 60,
	},
	back: {
		position: "absolute",
		left: 15,
	},
	right: {
		position: "absolute",
		right: 15,
		
	},
	btnAdd:{
		fontSize: 20,
		fontWeight: "bold",
	},
	backBtn: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
export default Header;
