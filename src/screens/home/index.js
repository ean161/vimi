import { React, useState, useEffect, useContext } from "react";
import { ImageBackground, Image } from "react-native";
import { ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SegmentedControl } from "react-native-ui-lib";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { UserContext } from "./../../context/userContext";
import { SocketContext } from "../../context/socketContext";

import commonStyle from "../../theme/commonStyle";
import Nav from "./nav";
import Room from "./room";
import Storage from "../../utils/storage";

const Home = ({ navigation }) => {
    const { socketRef, events, isConnected } = useContext(SocketContext);
    const { user, setUser } = useContext(UserContext);

    const [tab, setTab] = useState(0);
    const [listRoom, setListRoom] = useState([]);

    useEffect(() => {
        const event = events[events.length - 1];
        console.log(event);

        switch (event?.type) {
            case "list_room":
                setListRoom(event?.data);
                break;
            default:
                break;
        }
    }, [events]);

    useEffect(() => {
        socketRef.current?.send(JSON.stringify({
            type: "get_rooms"
        }));
    }, []);

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
                <Nav user={user}/>
                <SegmentedControl
                    onChangeIndex={setTab}
                    borderRadius={50}
                    backgroundColor="white"
                    segments={
                        [{
							label: "Phòng đang hot"
						}, {
							label: "Bạn bè"
						}]
                    }
                    initialIndex={0}
                    activeColor="black"
                    activeBackgroundColor="#f7f7f7"
                    outlineColor="#f7f7f7"
                    style={{
                        marginVertical: 16,
                        height: 50,
                        borderColor: "white"
                    }}
                    segmentLabelStyle={{
                        fontSize: 16
                    }}
                />
                <ScrollView style={{
                    flex: 1
                }}>
                    {listRoom.map((room) => (
                        <Room
                            key={room.id}
                            room={room}
                            navigation={navigation}
                        />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default Home;