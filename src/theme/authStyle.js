import { Colors } from "react-native-ui-lib";
import { StyleSheet } from "react-native";

import { DARK_COLOR, GRAY_COLOR, GRAY_DARK_COLOR } from "../utils/const";

const authStyle = StyleSheet.create({
    card: {
        flex: 1,
        marginTop: 200,
        alignItems: "center",
    },
    header: {
        text: {
            fontSize: 80,
            color: DARK_COLOR,
            fontFamily: "CherryBombOne-Regular",
        }
    },
    google: {
        marginTop: 10,
        borderRadius: 30,
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: GRAY_COLOR,
        icon: {
            width: 20,
            height: 20,
            marginRight: 10,
            resizeMode: "contain",
        },
        text: {
            fontSize: 16,
            color: GRAY_DARK_COLOR,
        }
    }
});

export default authStyle;