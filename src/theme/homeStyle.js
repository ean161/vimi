import { Colors } from "react-native-ui-lib";
import { StyleSheet } from "react-native";

const homeStyle = StyleSheet.create({
    nav: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        title: {
            fontFamily: "CherryBombOne-Regular",
            fontSize: 50,
            color: "black"
        },
        avatar: {
            source: {
                width: 40,
                height: 40,
                resizeMode: "cover",
                borderRadius: 50
            }
        }
    },
    room: {
        borderRadius: 20,
        flexDirection: "row",
        paddingVertical: 10,
        alignItems: "center",
        count: {
            // backgroundColor: "#010200",
            // width: 60,
            color: "grey",
            // paddingVertical: 2,
            // paddingHorizontal: 10,
            // borderRadius: 30,
            // textAlign: "center"
        },
        joinBtn: {
            width: 30,
            height: 30,
            resizeMode: "cover",
            position: "absolute",
            right: 0
        },
        thumbnail: {
            borderRadius: 30,
            marginRight: 16
        }
    }
});

export default homeStyle;