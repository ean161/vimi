import { Colors } from "react-native-ui-lib";
import { StyleSheet } from "react-native";

const authStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        title: {
            fontFamily: "CherryBombOne-Regular",
            fontSize: 80,
            color: "black"
        },
        loginBtn: {
            backgroundColor: "white"
        }
    }
});

export default authStyle;