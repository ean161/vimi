import { StyleSheet } from "react-native";
import { Colors } from "react-native-ui-lib";
import { LIGHT_COLOR } from "../utils/const";

const commonStyle = StyleSheet.create({
	wrapper: {
		flex: 1,
		paddingTop: 16,
		// paddingHorizontal: 20,
		height: "100%",
		backgroundColor: LIGHT_COLOR,
	},
	container: {
		padding: 16
	},
	notify: {
		width: "90%",
		borderRadius: 10,
		padding: 15,
		flexDirection: "row",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
        container:{
            flex: 1,
            marginLeft: 10
        },
        title: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16
        },
        content: {
            color: "#fff",
            fontSize: 14,
            marginTop: 4
        },
        success: {
            backgroundColor: "#4CAF50"
        },
        error: {
            backgroundColor: Colors.$backgroundDangerHeavy
        }
	}
});

export default commonStyle;