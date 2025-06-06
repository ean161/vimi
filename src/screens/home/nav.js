import { View, Text, Image } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/AntDesign";

import commonStyle from "../../theme/commonStyle";
import homeStyle from "../../theme/homeStyle";

const Nav = ({ user }) => {
    return (
        <View style={homeStyle.nav}>
            <Text style={homeStyle.nav.title}>Vimi</Text>
            <View style={homeStyle.nav.avatar}>
                <Image style={homeStyle.nav.avatar.source} source={{ uri: user?.avatar }} />
            </View>
        </View>
    );
}

export default Nav;