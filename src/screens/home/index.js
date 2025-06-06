import React from "react";
import { ImageBackground, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { View, Text, Button, Typography, Colors } from "react-native-ui-lib";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import commonStyle from "../../theme/commonStyle";
import Nav from "./nav";
import Room from "./room";

const Home = ({ navigation }) => {
    return (
        <LinearGradient
            colors={[
                "white",
                "white"
            ]}
            style={{flex: 1}}
            start={{
                x: 0.3,
                y: 0
            }}
            end={{
                x: 0.3,
                y: 0.9
            }}
        >
            <SafeAreaView style={commonStyle.wrapper}>
                <Nav />
                <View marginB-16>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>
                        <Image
                            source={require("./../../assets/icon/chat.png")}
                            style={{
                                width: 80,
                                height: 80,
                                resizeMode: "contain"
                            }}
                        />
                        <Image
                            source={require("./../../assets/icon/upgrade.png")}
                            style={{
                                width: 75,
                                height: 75,
                                resizeMode: "contain"
                            }}
                        />
                    </View>
                </View>
                <ScrollView style={{
                    flex: 1
                }}>
                    <Room
                        title="Phòng trò chuyện của Ân"
                        thumbnail="https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/480985487_1170147727959645_1694118446548528336_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=o2YjhMQwWp0Q7kNvwElZOr7&_nc_oc=Adl_tvlLQNDiMOOmgHiYiTxisPzQwPZQDRUGf-w5jnIn9zhPfE9OdBUB8lXw1SGWydrbkTs4Muqbt6dl8SijdNUR&_nc_zt=23&_nc_ht=scontent.fvca1-4.fna&_nc_gid=RePMTpvdHeL045Q6zPPNeQ&oh=00_AfPR3RBWzWrAmE2rhwFDeYC2O6sH_AslKuXx5ymmH9pwmA&oe=6848D7A4"
                        desc="Room desc is here"
                        count={3}
                    />
                    <Room
                        title="Phòng trò chuyện của Ân"
                        thumbnail="https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/480985487_1170147727959645_1694118446548528336_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=o2YjhMQwWp0Q7kNvwElZOr7&_nc_oc=Adl_tvlLQNDiMOOmgHiYiTxisPzQwPZQDRUGf-w5jnIn9zhPfE9OdBUB8lXw1SGWydrbkTs4Muqbt6dl8SijdNUR&_nc_zt=23&_nc_ht=scontent.fvca1-4.fna&_nc_gid=RePMTpvdHeL045Q6zPPNeQ&oh=00_AfPR3RBWzWrAmE2rhwFDeYC2O6sH_AslKuXx5ymmH9pwmA&oe=6848D7A4"
                        desc="Room desc is here"
                        count={3}
                    />
                    <Room
                        title="Phòng trò chuyện của Ân"
                        thumbnail="https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/480985487_1170147727959645_1694118446548528336_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=o2YjhMQwWp0Q7kNvwElZOr7&_nc_oc=Adl_tvlLQNDiMOOmgHiYiTxisPzQwPZQDRUGf-w5jnIn9zhPfE9OdBUB8lXw1SGWydrbkTs4Muqbt6dl8SijdNUR&_nc_zt=23&_nc_ht=scontent.fvca1-4.fna&_nc_gid=RePMTpvdHeL045Q6zPPNeQ&oh=00_AfPR3RBWzWrAmE2rhwFDeYC2O6sH_AslKuXx5ymmH9pwmA&oe=6848D7A4"
                        desc="Room desc is here"
                        count={3}
                    />
                    <Room
                        title="Phòng trò chuyện của Ân"
                        thumbnail="https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/480985487_1170147727959645_1694118446548528336_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=o2YjhMQwWp0Q7kNvwElZOr7&_nc_oc=Adl_tvlLQNDiMOOmgHiYiTxisPzQwPZQDRUGf-w5jnIn9zhPfE9OdBUB8lXw1SGWydrbkTs4Muqbt6dl8SijdNUR&_nc_zt=23&_nc_ht=scontent.fvca1-4.fna&_nc_gid=RePMTpvdHeL045Q6zPPNeQ&oh=00_AfPR3RBWzWrAmE2rhwFDeYC2O6sH_AslKuXx5ymmH9pwmA&oe=6848D7A4"
                        desc="Room desc is here"
                        count={3}
                    />
                    <Room
                        title="Phòng trò chuyện của Ân"
                        thumbnail="https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/480985487_1170147727959645_1694118446548528336_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=o2YjhMQwWp0Q7kNvwElZOr7&_nc_oc=Adl_tvlLQNDiMOOmgHiYiTxisPzQwPZQDRUGf-w5jnIn9zhPfE9OdBUB8lXw1SGWydrbkTs4Muqbt6dl8SijdNUR&_nc_zt=23&_nc_ht=scontent.fvca1-4.fna&_nc_gid=RePMTpvdHeL045Q6zPPNeQ&oh=00_AfPR3RBWzWrAmE2rhwFDeYC2O6sH_AslKuXx5ymmH9pwmA&oe=6848D7A4"
                        desc="Room desc is here"
                        count={3}
                    />
                    <Room
                        title="Phòng trò chuyện của Ân"
                        thumbnail="https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/480985487_1170147727959645_1694118446548528336_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=o2YjhMQwWp0Q7kNvwElZOr7&_nc_oc=Adl_tvlLQNDiMOOmgHiYiTxisPzQwPZQDRUGf-w5jnIn9zhPfE9OdBUB8lXw1SGWydrbkTs4Muqbt6dl8SijdNUR&_nc_zt=23&_nc_ht=scontent.fvca1-4.fna&_nc_gid=RePMTpvdHeL045Q6zPPNeQ&oh=00_AfPR3RBWzWrAmE2rhwFDeYC2O6sH_AslKuXx5ymmH9pwmA&oe=6848D7A4"
                        desc="Room desc is here"
                        count={3}
                    />
                    <Room
                        title="Phòng trò chuyện của Ân"
                        thumbnail="https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/480985487_1170147727959645_1694118446548528336_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=o2YjhMQwWp0Q7kNvwElZOr7&_nc_oc=Adl_tvlLQNDiMOOmgHiYiTxisPzQwPZQDRUGf-w5jnIn9zhPfE9OdBUB8lXw1SGWydrbkTs4Muqbt6dl8SijdNUR&_nc_zt=23&_nc_ht=scontent.fvca1-4.fna&_nc_gid=RePMTpvdHeL045Q6zPPNeQ&oh=00_AfPR3RBWzWrAmE2rhwFDeYC2O6sH_AslKuXx5ymmH9pwmA&oe=6848D7A4"
                        desc="Room desc is here"
                        count={3}
                    />
                    <Room
                        title="Phòng trò chuyện của Ân"
                        thumbnail="https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/480985487_1170147727959645_1694118446548528336_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=o2YjhMQwWp0Q7kNvwElZOr7&_nc_oc=Adl_tvlLQNDiMOOmgHiYiTxisPzQwPZQDRUGf-w5jnIn9zhPfE9OdBUB8lXw1SGWydrbkTs4Muqbt6dl8SijdNUR&_nc_zt=23&_nc_ht=scontent.fvca1-4.fna&_nc_gid=RePMTpvdHeL045Q6zPPNeQ&oh=00_AfPR3RBWzWrAmE2rhwFDeYC2O6sH_AslKuXx5ymmH9pwmA&oe=6848D7A4"
                        desc="Room desc is here"
                        count={3}
                    />
                    <Room
                        title="Phòng trò chuyện của Ân"
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