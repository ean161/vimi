import { Colors } from "react-native-ui-lib";
import { StyleSheet } from "react-native";

import { BLUE_COLOR, GRAY_COLOR, GRAY_DARK_COLOR, GRAY_MID_COLOR, DARK_COLOR, GREEN_FADED_COLOR, GREEN_COLOR, RED_COLOR, LIGHT_COLOR } from "../utils/const";

const homeStyle = StyleSheet.create({
    card: {
        flex: 1,
    },
    hr: {
        height: 5,
        marginTop: 20,
        backgroundColor: GRAY_MID_COLOR,
    },
    header: {
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        justifyContent: "flex-end",
        // backgroundColor: BLUE_COLOR,
        icon: {
            width: 50,
            height: 50,
            borderRadius: 25,
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: GRAY_COLOR,
            src: {
                top: 10,
                width: 250,
                resizeMode: "contain",
            }
        },
        text: {
            marginTop: 10,
            fontSize: 40,
            // marginLeft: 10,
            fontFamily: "SF Pro Rounded Bold",
            // fontSize: 80,
            color: BLUE_COLOR,
            // fontFamily: "CherryBombOne-Regular",
        },
        icons: {
            // top: 5,
            // right: 0,
            // position: "absolute",
            flexDirection: "row",
            icon: {
                width: 40,
                height: 40,
                padding: 10,
                marginLeft: 10,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: GRAY_COLOR,
                src: {
                    fontSize: 20,
                }
            }
        }
    },
    nav: {
        marginTop: 20,
        marginBottom: 10,
        alignItems: "center",
        marginHorizontal: 16,
        paddingHorizontal: 20,
        search: {
            height: 45,
            borderRadius: 15,
            // paddingVertical: 5,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 10,
            backgroundColor: GRAY_COLOR,
            icon: {
                fontSize: 25,
                color: GRAY_DARK_COLOR,
                marginRight: 10,
            },
            input: {
                fontSize: 16,
                placeholderTextColor: "red",
                width: "100%",
            }
        }
    },
    tab: {
        bottom: 0,
        width: "100%",
        paddingTop: 10,
        paddingBottom: 25,
        flexDirection: "row",
        position: "absolute",
        paddingHorizontal: 20,
        backgroundColor: LIGHT_COLOR,
        justifyContent: "space-between",
        item: {
            borderRadius: 30,
            paddingVertical: 6,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
            img: {
                width: 40,
                height: 40,
                borderRadius: 30,
                resizeMode: "cover"
            },
            icon: {
                fontSize: 20,
                color: GRAY_DARK_COLOR,
            },
            text: {
                fontSize: 14,
                marginTop: 6,
                color: GRAY_DARK_COLOR,
                // fontFamily: "SF Pro Text Bold",
            }
        }
    },
    currentRoom: {
        // marginTop: 10,
        paddingHorizontal: 20,
        title: {
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "space-between",
            icon: {
                fontSize: 25,
                marginLeft: 16,
                color: BLUE_COLOR,
            },
            content: {
                fontSize: 26,
                color: DARK_COLOR,
                fontFamily: "SF Pro Text Bold",
            },
            userCount: {
                height: 26,
                borderRadius: 16,
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 10,
                justifyContent: "center",
                backgroundColor: GREEN_FADED_COLOR,
                icon: {
                    fontSize: 13,
                    marginRight: 6,
                    color: GREEN_COLOR,
                },
                num: {
                    color: GREEN_COLOR,
                }
            }
        },
        list: {
            marginTop: 16,
            flexDirection: "row",
            user: {
                width: 65,
                alignItems: "center",
                marginRight: 26,
                avatar: {
                    alignItems: "center",
                    src: {
                        width: 60,
                        height: 60,
                        borderRadius: 100,
                        resizeMode: "cover",
                    },
                    dotWrapper: {
                        right: 0,
                        bottom: 0,
                        width: 20,
                        height: 20,
                        borderRadius: 30,
                        position: "absolute",
                        alignItems: "center",
                        backgroundColor: "white",
                        justifyContent: "center",
                        dot: {
                            width: 15,
                            height: 15,
                            borderRadius: 30,
                            backgroundColor: GREEN_COLOR,
                        }
                    }
                },
                name: {
                    overflow: "hidden",
                    fontSize: 16,
                    marginTop: 10,
                    color: GRAY_DARK_COLOR,
                }
            }
        }
    },
    posts: {
        marginBottom: 60,
        post: {
            overflow: "hidden",
            author: {
                paddingTop: 20,
                flexDirection: "row",
                alignItems: "center",
                avatar: {
                    width: 45,
                    height: 45,
                    marginRight: 10,
                    borderRadius: 30,
                },
                title: {
                    name: {
                        fontSize: 16,
                    },
                    createdDate: {
                        fontSize: 14,
                        color: GRAY_DARK_COLOR,
                    }
                }
            },
            authorActions: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
            },
            like: {
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                btn: {
                    // width: 40,
                    // height: 40,
                    // padding: 10,
                    borderRadius: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    src: {
                        fontSize: 35,
                        color: GRAY_MID_COLOR,
                    }
                },
                count: {
                    fontSize: 14,
                    color: GRAY_DARK_COLOR,
                    marginRight: 5,
                }
            },
            cap: {
                // marginVertical: 5,
                marginTop: 10,
                fontSize: 16,
                paddingHorizontal: 20,
            },
            attach_image: {
                marginTop: 10,
                src: {
                    width: "100%",
                    aspectRatio: 2,
                    resizeMode: "content",
                    
                }
            }
        },
    }
});

export default homeStyle;