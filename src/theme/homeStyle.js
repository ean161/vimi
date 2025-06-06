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
            // color: Colors.$white
        },
        icon: {
            backgroundColor: Colors.grey50,
            padding: 6,
            borderRadius: 50
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
        backgroundColor: "white",
        borderRadius: 20,
        flexDirection: "row",
        padding: 16,
        alignItems: "center",
        marginBottom: 10,
        count: {
            backgroundColor: "#71a5de",
            width: 60,
            color: "white",
            paddingVertical: 2,
            paddingHorizontal: 10,
            borderRadius: 30,
            textAlign: "center"
        },
        joinBtn: {
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