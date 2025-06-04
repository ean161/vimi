import { View, Text } from "react-native";

import commonStyle from "../theme/commonStyle";

const toastConfig = {
	success: (props) => (
		<View style={[commonStyle.notify, commonStyle.notify.success]}>
			<View style={commonStyle.notify.container}>
				<Text style={commonStyle.notify.title}>{props.text1}</Text>
				<Text style={commonStyle.notify.content}>{props.text2}</Text>
			</View>
		</View>
	),
	error: (props) => (
		<View style={[commonStyle.notify, commonStyle.notify.error]}>
			<View style={commonStyle.notify.container}>
				<Text style={commonStyle.notify.title}>{props.text1}</Text>
				<Text style={commonStyle.notify.content}>{props.text2}</Text>
			</View>
		</View>
	)
};

export default toastConfig;