import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Typography } from "react-native-ui-lib";
import Toast from "react-native-toast-message";

import toastConfig from "./src/utils/toastConfig";
import Auth from "./src/screens/auth";
import Home from "./src/screens/home";
import { UserProvider } from "./src/context/userContext";
import { SocketProvider } from "./src/context/socketContext";

const Stack = createStackNavigator();

Typography.loadTypographies({
    text: {
        fontFamily: "DarkerGrotesque"
    }
});

const App = () => {
	return (
		<UserProvider>
			<SocketProvider>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Auth">
						<Stack.Screen
							name="Auth"
							component={Auth}
							options={{
								headerShown: false,
								statusBarHidden: true
							}}
						/>
						<Stack.Screen
							name="Home"
							component={Home}
							options={{
								headerShown: false,
								statusBarHidden: true
							}}
						/>
					</Stack.Navigator>
					<Toast
						config={toastConfig}
						theme="light"
						position="bottom"
						isRTL={true}
						showProgressBar={false}
						showCloseIcon={false}
						animationStyle="fade"
					/>
				</NavigationContainer>
			</SocketProvider>
		</UserProvider>
	);
};

export default App;