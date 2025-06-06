import { React, useState, useEffect, useContext } from "react";
import { ImageBackground, Image } from "react-native";
import { ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SegmentedControl } from "react-native-ui-lib";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { UserContext } from "./../../context/userContext";

import commonStyle from "../../theme/commonStyle";
import Nav from "./nav";
import Room from "./room";
import Storage from "../../utils/storage";

const Home = ({ navigation }) => {
    const { user, setUser } = useContext(UserContext);

    const [tab, setTab] = useState(0);

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
                        // fontFamily: "Comfortaa"
                    }}
                />
                <ScrollView style={{
                    flex: 1
                }}>
                    <Room
                        title="Phòng của Ân"
                        thumbnail={user?.avatar}
                        desc="Room desc is here"
                        count={3}
                    />
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default Home;