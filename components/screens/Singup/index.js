import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Login from '../Login'

function Singup({navigation}){
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
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>Sign Up</TouchableOpacity>
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
        color: "#ff9999",
    },
    textInputContainer:{
		paddingHorizontal: 10,
		backgroundColor: 'rgba(0,0,0,.1)',
		borderRadius: 7,
		marginBottom: 15,
		fontSize: 20,
	},
	textInput: {
		width: 300,
		height: 40,
		paddingTop: 10,
	},
    icon: {
		width: 40,
		height: 40,
		position: "absolute",
		top: 8,
		left: 12,
	},
	button: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#7d7c7b",
		borderRadius: 7,
		marginTop: 30,
		alignItems: "center",
		justifyContent: "center",
		width: 320,
		height: 40,
		backgroundColor: '#ffddba',
	  },
})