import { React, useState, useEffect } from "react";
import { ImageBackground, Image } from "react-native";
import { ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SegmentedControl } from "react-native-ui-lib";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import commonStyle from "../../theme/commonStyle";
import Nav from "./nav";
import Room from "./room";

const Home = ({ navigation }) => {
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
                <Nav />
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
                        thumbnail="https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/480985487_1170147727959645_1694118446548528336_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=o2YjhMQwWp0Q7kNvwElZOr7&_nc_oc=Adl_tvlLQNDiMOOmgHiYiTxisPzQwPZQDRUGf-w5jnIn9zhPfE9OdBUB8lXw1SGWydrbkTs4Muqbt6dl8SijdNUR&_nc_zt=23&_nc_ht=scontent.fvca1-4.fna&_nc_gid=RePMTpvdHeL045Q6zPPNeQ&oh=00_AfPR3RBWzWrAmE2rhwFDeYC2O6sH_AslKuXx5ymmH9pwmA&oe=6848D7A4"
                        desc="Room desc is here"
                        count={3}
                    />
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default Home;