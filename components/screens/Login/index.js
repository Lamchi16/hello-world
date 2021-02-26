
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Navigation} from '@react-navigation/native';


function Login({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.up}>
				<Image
					source={require('../../img/todolist.png')}
					style={styles.image}>
				</Image>
				
				</View>
			<View style={styles.down}>
				<View style={styles.textInputContainer}>
					<FontAwesome5
						name="user-alt"
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
				<TouchableOpacity style={styles.loginButton}>
					<Text style={styles.loginButtonTitle}>LOGIN</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.textSignUp}
					onPress={() => navigation.navigate("Singup")}
					>
                <Text style={styles.textLogin}>Haven't account? Singup</Text>
            </TouchableOpacity>
				
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	image:{
		resizeMode: "contain",
		width: 300,
		height: 100,
	},
	up:{
		flex: 3,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	down:{
		flex: 7,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	textInputContainer:{
		
		backgroundColor: 'rgba(0,0,0,.1)',
		borderRadius: 7,
		marginBottom: 15,
		fontSize: 20,
		position: 'relative',
	},
	textInput: {
		width: 280,
		height: 40,
		paddingLeft: 10,
		marginLeft: 40,
		borderBottomRightRadius: 10,
		borderTopRightRadius: 10,
	},
	loginButton:{
		width: 320,
		height: 40,
		borderRadius: 7,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffddba',
	},
	loginButtonTitle:{
		fontSize: 18,
		color: "#7d7c7b"
	},
	textSignUp: {
		color: "blue",
		textDecorationLine:'underline',
		fontSize: 20,
	  },
	  view: {
		justifyContent:'center',
		alignItems:'center',
		marginTop:20,
	  },
	icon: {
		width: 40,
		height: 40,
		position: "absolute",
		top: 8,
		left: 12,
	}
	
});

export default Login;
