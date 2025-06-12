import Icon from "react-native-vector-icons/AntDesign";
import { View, Text, Image } from "react-native-ui-lib";

import homeStyle from "../../theme/homeStyle";
import commonStyle from "../../theme/commonStyle";

const Nav = ({ user }) => {
    return (
        <View style={homeStyle.nav}>
            <View>
                <Text style={homeStyle.nav.title}>Vimi</Text>
            </View>
            <View style={homeStyle.nav.avatar}>
                <Image style={homeStyle.nav.avatar.source} source={{ uri: user?.avatar }} />
            </View>
        </View>
    );
}

export default Nav;