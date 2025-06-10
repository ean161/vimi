import { React, useState, useEffect, useContext } from "react";
import { ImageBackground, Image, Pressable } from "react-native";
import { View, Text } from "react-native-ui-lib";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { UserContext } from "./../../context/userContext";
import { SocketContext } from "../../context/socketContext";
import Icon from 'react-native-vector-icons/MaterialIcons';

import homeStyle from "../../theme/homeStyle";
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
                <View
                    marginB-32
                    style={{
                        width: "100%",
                        flexDirection: "row",
                        borderRadius: 50,
                        alignItems: "center"
                    }}
                >
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <Image
                            source={{uri: room?.thumbnail}}
                            width={50}
                            height={50} 
                            resizeMode="cover"
                            style={homeStyle.room.thumbnail}
                        />
                        <View>
                            <Text text60BO text marginB-4>{room?.title}</Text>
                            <Text text text90L>3 người đang tham gia</Text>
                        </View>
                    </View>
                    <Pressable
                        style={{
                            position: "absolute",
                            right: 0
                        }}
                        onPress={() => {
                            navigation.replace("Home");
                        }}
                    >
                        <Icon
                            name="chevron-right"
                            size={24}
                            color="grey"
                        />
                    </Pressable>
                </View>
                <View style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between"
                }}>
                    <User user={{}} />
                    <User user={{}} />
                    <User user={{}} />
                    <User user={{}} />
                    <User user={{}} />
                    <User user={{}} />
                    <User user={{}} />
                    <User user={{}} />
                    <User user={{}} />
                    <User user={{}} />
                    <User user={{}} />
                    <User user={{}} />
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

const User = ({ user }) => {
    return (
        <View style={{
            width: 80,
            height: 85,
            // backgroundColor: "red",
            marginBottom: 16,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <View style={{
                width: 50,
                height: 50,
                position: "absolute",
                top: 0
            }}>
                <Image
                    style={{
                        width: 50,
                        height: 50,
                        top: 5,
                        borderRadius: 50,
                        position: "absolute",
                    }}
                    source={{uri: `https://robohash.org/${Math.floor(Math.random() * 100)}.png?set=set1&bgset=bg1`}}
                />
                <Image
                    style={{
                        width: 60,
                        height: 60,
                        position: "absolute",
                        alignSelf: "center"
                    }}
                    source={require("./../../assets/frame/frame-1.png")}
                />
            </View>
            <Text style={{
                position: "absolute",
                bottom: 0
            }}>User #{Math.floor(Math.random() * 100)}</Text>
        </View>
    );
}

export default Voice;