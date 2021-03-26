
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Mywork from "../screens/Myworks";
import Detail from "../screens/Detail";
import InputWorks from "../screens/InputWorks";
const Stack = createStackNavigator();

function RootNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Mywork' component={Mywork} />

				<Stack.Screen
					name='Signup'
					component={Signup}
				/>

				<Stack.Screen
					name='Detail'
					component={Detail}
				/>
				<Stack.Screen name='InputWorks' component={InputWorks} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default RootNavigation;
