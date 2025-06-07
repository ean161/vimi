import React from "react";
import { Image, Pressable } from "react-native";
import { View, Text, Colors } from "react-native-ui-lib";

import commonStyle from "../../theme/commonStyle";
import homeStyle from "../../theme/homeStyle";

const Room = ({ navigation, room }) => {
    return (
        <Pressable
            style={homeStyle.room}
            onPress={() => {
                navigation.push("Voice", { room });
            }}
        >
            <Image
                source={{uri: room?.thumbnail}}
                width={50}
                height={50} 
                resizeMode="cover"
                style={homeStyle.room.thumbnail}
            />
            <View>
                <Text text60BO text marginB-4>{room?.title}</Text>
                <Text text style={homeStyle.room.count}>3 người đang tham gia</Text>
            </View>
            <Image
                source={require("./../../assets/icon/call.png")}
                style={homeStyle.room.joinBtn}
            />
        </Pressable>
    );
}

export default Room;