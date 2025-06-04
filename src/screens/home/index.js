import React from "react";
import { View, Text, Button } from "react-native-ui-lib";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import commonStyle from "../../theme/commonStyle";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyle.wrapper}>
            <View>
                <Text>Hi from Home</Text>
                <Button onPress={() => {
                    Toast.show({
                        type: "success",
                        text1: "Success!",
                        text2: "This is a success message"
                    });
                }}>CC</Button>
            </View>
        </SafeAreaView>
    );
}

export default Home;