import { View, Text, Image } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/AntDesign";

import commonStyle from "../../theme/commonStyle";
import homeStyle from "../../theme/homeStyle";

const Nav = () => {
    return (
        <View style={homeStyle.nav}>
            <Text style={homeStyle.nav.title}>Vimi</Text>
            <View style={homeStyle.nav.avatar}>
                <Image style={homeStyle.nav.avatar.source} source={{ uri: "https://i.pinimg.com/736x/fe/57/29/fe5729d76890286b2c14778f3b81a689.jpg" }} />
            </View>
        </View>
    );
}

export default Nav;