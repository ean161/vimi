import { View, Text } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/AntDesign";

import commonStyle from "../../theme/commonStyle";
import homeStyle from "../../theme/homeStyle";

const Nav = () => {
    return (
        <View style={homeStyle.nav}>
            <Text style={homeStyle.nav.title}>Vimi</Text>
            <Icon style={homeStyle.nav.icon} name="plus" size={25} color="grey"/>
        </View>
    );
}

export default Nav;