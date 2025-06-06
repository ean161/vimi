import React from "react";
import { Image } from "react-native";
import { View, Text, Colors } from "react-native-ui-lib";

import commonStyle from "../../theme/commonStyle";
import homeStyle from "../../theme/homeStyle";

const Room = ({ title, thumbnail, desc, count}) => {
    return (
        <View style={homeStyle.room}>
            <Image
                source={{uri: thumbnail}}
                width={50}
                height={50} 
                resizeMode="cover"
                style={homeStyle.room.thumbnail}
            />
            <View>
                <Text text70 marginB-2>{title}</Text>
                <Text marginB-3 text100 style={homeStyle.room.count}>3 nguời</Text>
            </View>
            <Image
                source={require("./../../assets/icon/call.png")}
                style={homeStyle.room.joinBtn}
            />
        </View>
    );
}

export default Room;