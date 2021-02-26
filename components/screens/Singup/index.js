import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Singup(props){
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Create Your Account</Text>
            <View style={styles.textInputContainer}>
                <FontAwesome5
						name="user-alt"
						size={20}
						color="black"
						style={styles.icon}
				/>
                <TextInput style={styles.textInput}
                    placeholder="Username">
                </TextInput>
			</View>
            <View style={styles.textInputContainer}>
                <FontAwesome5
						name="envelope"
						size={20}
						color="black"
						style={styles.icon}
				/>
                <TextInput style={styles.textInput}
                    textContentType='emailAddress'
                    keyboardType='email-address'
                    placeholder="Email">
                </TextInput>
				</View>
				<View style={styles.textInputContainer}>
                    <FontAwesome5
						name="unlock-alt"
						size={20}
						color="black"
						style={styles.icon}
					/>
					<TextInput style={styles.textInput}
					placeholder="Password"
					secureTextEntry={true}
					>
					</TextInput>
				</View>
                <View style={styles.textInputContainer}>
                    <FontAwesome5
						name="unlock-alt"
						size={20}
						color="black"
						style={styles.icon}
					/>
					<TextInput style={styles.textInput}
					placeholder="Enter the Password"
					secureTextEntry={true}
					>
					</TextInput>
				</View>
				<TouchableOpacity style={styles.button}
				 onPress={() => navigation.navigate("Login")}>
					 SING UP
				</TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
    },
    textTitle:{
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 50,
        color: "#ffddba",
    },
    textInputContainer:{
		paddingHorizontal: 10,
		backgroundColor: 'rgba(0,0,0,.1)',
		borderRadius: 7,
		marginBottom: 15,
		fontSize: 20,
	},
	textInput: {
		width: 280,
		height: 40,
		paddingLeft: 5,
		marginLeft: 40,
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
	},
    icon: {
		width: 40,
		height: 40,
		position: "absolute",
		top: 8,
		left: 12,
	},
	button: {
		width: 340,
		height: 40,
		borderRadius: 7,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffddba',
		fontSize: 18,
		color: "#7d7c7b",
	  },
});
export default Singup;