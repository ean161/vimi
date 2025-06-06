import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Typography } from "react-native-ui-lib";
import Toast from "react-native-toast-message";

import toastConfig from "./src/utils/toastConfig";
import Home from "./src/screens/home";

const Stack = createStackNavigator();

Typography.loadTypographies({
    text: {
        fontFamily: "DarkerGrotesque"
    }
});

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
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
	);
};

export default App;