import { View, Text, Pressable, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import IonIcon from "react-native-vector-icons/Ionicons";
import styles from "../../../theme/homeStyle";
import { BLUE_COLOR, DARK_COLOR, GRAY_COLOR } from "../../../utils/const";

const Tab = ({user, tab, setTab}) => {
    const tabs = [
        {
            icon: "bolt-lightning",
            name: "post",
            title: "Chung",
        },
        {
            icon: "circle-notch",
            name: "scan",
            title: "Kết bạn",
        },
        {
            icon: "headphones-simple",
            name: "room",
            title: "Phòng",
        }
    ];

    return (
        <View style={styles.tab}>
            {tabs.map((item, index) => {
                return (
                    <Pressable
                        key={index}
                        style={styles.tab.item}
                        onPress={() => {
                            setTab(item?.name);
                        }}>
                        <Icon name={item?.icon} style={[styles.tab.item.icon, tab == item?.name ? {color: BLUE_COLOR} : {}]} />
                        <Text style={[styles.tab.item.text, tab == item?.name ? {color: DARK_COLOR} : {}]}>{item?.title}</Text>
                    </Pressable>
                );
            })}
            <Pressable
                style={styles.tab.item}
                onPress={() => {
                    setTab("profile");
                }}>
                <Image style={styles.tab.item.img} source={{uri: user.photo}} />
            </Pressable>
        </View>
    );
}

export default Tab;