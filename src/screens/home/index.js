import React from "react";
import { View, Text, Button } from "react-native-ui-lib";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import commonStyle from "../../theme/commonStyle";
import Nav from "./nav";

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={commonStyle.wrapper}>
            <Nav />
        </SafeAreaView>
    );
}

export default Home;