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
                <Text text60BO text marginB-4>{title}</Text>
                <Text text style={homeStyle.room.count}>3 người đang tham gia</Text>
            </View>
            <Image
                source={require("./../../assets/icon/call.png")}
                style={homeStyle.room.joinBtn}
            />
        </View>
    );
}

export default Room;