import { useState, useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Modal, ModalContent } from "react-native-modals";
import Icon from "react-native-vector-icons/FontAwesome6";
import IonIcon from "react-native-vector-icons/Ionicons";
import styles from "../../../theme/homeStyle";
import { RED_DARK_COLOR } from "../../../utils/const";

const Header = () => {
    const [postModal, setPostModal] = useState(false);

    return (
        <View style={styles.header}>
            {/* <View style={styles.header.icon}>
                <Image resizeMode="cover" source={require("../../../assets/img/loading.gif")} style={styles.header.icon.src} />
            </View> */}
            {/* <Text style={styles.header.text}>vimi</Text> */}
            <View style={styles.header.icons}>
                <Pressable
                    onPress={() => {
                        setPostModal(!postModal);
                    }}
                    style={styles.header.icons.icon}
                >
                    <Icon style={styles.header.icons.icon.src} name="pen" />
                </Pressable>
                <View style={styles.header.icons.icon}>
                    <Icon style={styles.header.icons.icon.src} name="plus" />
                </View>
                <View style={styles.header.icons.icon}>
                    <Icon style={[styles.header.icons.icon.src, {color: RED_DARK_COLOR}]} name="arrow-right-from-bracket" />
                </View>
            </View>
        </View>
    );
}

export default Header;