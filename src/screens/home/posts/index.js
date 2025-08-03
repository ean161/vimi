import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import IonIcon from "react-native-vector-icons/Ionicons";
import styles from "../../../theme/homeStyle";
import { RED_DARK_COLOR, BLUE_COLOR, GREEN_COLOR, GREEN_FADED_COLOR, GRAY_COLOR, RED_COLOR, LIGHT_COLOR, RED_FADED_COLOR } from "../../../utils/const";

const Posts = ({user, posts, setPosts}) => {
    const handleLike = (index) => {
        const updatedPosts = [...posts];
        if (updatedPosts[index].likes.includes(user.id)) {
            updatedPosts[index].likes = updatedPosts[index].likes.filter(id => id !== user.id);
        } else {
            updatedPosts[index].likes.push(user.id);
        }
        setPosts(updatedPosts);
    };
    return (
        <View style={styles.posts}>
            {posts.map((item, index) => {
                if (item?.caption == null)
                    return null;

                return (
                    <View key={index}>
                        <View style={styles.posts.post}>
                            <View style={styles.posts.post.authorActions}>
                                <View style={styles.posts.post.author}>
                                    <Image source={{uri: item?.avatar}} style={styles.posts.post.author.avatar} />
                                    <View style={styles.posts.post.author.title}>
                                        <Text style={styles.posts.post.author.title.name}>{item?.name}</Text>
                                        <Text style={styles.posts.post.author.title.createdDate}>{item?.since}</Text>
                                    </View>
                                </View>
                                <View style={styles.posts.post.like}>
                                    <Text style={[styles.posts.post.like.count, item?.likes.includes(user.id) ? {color: RED_DARK_COLOR} : {}]}>{item?.likes.length}</Text>
                                    <Pressable
                                        style={styles.posts.post.like.btn}
                                        onPress={() => handleLike(index)}
                                    >
                                        <Icon style={[styles.posts.post.like.btn.src, item?.likes.includes(user.id) ? {color: RED_DARK_COLOR} : {}]} name={item?.likes.includes(user.id) ? "heart-circle-check" : "heart-circle-xmark"} />
                                    </Pressable>
                                </View>
                            </View>
                            <Text style={styles.posts.post.cap} >{item?.caption}</Text>
                            {
                                item?.attach_image ? 
                                    <View style={styles.posts.post.attach_image}>
                                        {item?.attach_image ? <Image style={styles.posts.post.attach_image.src} source={{uri: item?.attach_image}} /> : null}
                                    </View>
                                : null
                            }
                        </View>
                        <View style={styles.hr}></View>
                    </View>
                );
            })}
        </View>
    );
}

export default Posts;