import { React, useState, useEffect, useContext } from "react";
import { ImageBackground, Image } from "react-native";
import { View, Text } from "react-native-ui-lib";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { UserContext } from "./../../context/userContext";
import { SocketContext } from "../../context/socketContext";

import commonStyle from "../../theme/commonStyle";
import Storage from "../../utils/storage";

const Voice = ({ navigation, route }) => {
    const { socketRef, events, isConnected } = useContext(SocketContext);
    const { user, setUser } = useContext(UserContext);

    const [room, setRoom] = useState(route.params?.room || {});
    
    useEffect(() => {
        // const event = events[events.length - 1];
        // console.log(event);

        // switch (event?.type) {
        //     default:
        //         break;
        // }
    }, [events]);

    return (
        <LinearGradient
            colors={[
                "white",
                "white"
            ]}
            style={{flex: 1}}
            start={{
                x: 1,
                y: 0
            }}
            end={{
                x: 0.5,
                y: 0.5
            }}
        >
            <SafeAreaView style={commonStyle.wrapper}>
                <Text>{room?.title}</Text>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default Voice;