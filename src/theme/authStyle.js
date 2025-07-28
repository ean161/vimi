import { Colors } from "react-native-ui-lib";
import { StyleSheet } from "react-native";

import { GRAY_COLOR, GRAY_DARK_COLOR } from "../utils/const";

const authStyle = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: "center",
        marginTop: 250,
    },
    header: {
        text: {
            fontSize: 80,
            fontFamily: "CherryBombOne-Regular",
        }
    },
    google: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: GRAY_COLOR,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 30,
        icon: {
            width: 20,
            height: 20,
            marginRight: 10,
            resizeMode: "contain",
        },
        text: {
            color: GRAY_DARK_COLOR,
            fontSize: 16,
        }
    }
});

export default authStyle;