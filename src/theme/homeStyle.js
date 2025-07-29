import { Colors } from "react-native-ui-lib";
import { StyleSheet } from "react-native";

import { GRAY_COLOR, GRAY_DARK_COLOR, DARK_COLOR, GREEN_FADED_COLOR, GREEN_COLOR } from "../utils/const";

const homeStyle = StyleSheet.create({
    card: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
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
            marginTop: -20,
            fontSize: 55,
            // marginLeft: 10,
            // fontFamily: "SF Pro Rounded Bold",
            // fontSize: 80,
            color: DARK_COLOR,
            fontFamily: "CherryBombOne-Regular",
        },
        icons: {
            top: 5,
            right: 0,
            position: "absolute",
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
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        marginHorizontal: 16,
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
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        item: {
            borderRadius: 30,
            paddingVertical: 6,
            paddingHorizontal: 25,
            text: {
                fontSize: 20,
                color: DARK_COLOR,
                fontFamily: "SF Pro Text Bold",
            }
        }
    },
    currentRoom: {
        marginTop: 10,
        title: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
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
        post: {
            // backgroundColor: GRAY_COLOR,
            marginTop: 10,
            // borderRadius: 10,
            overflow: "hidden",
            author: {
                paddingVertical: 10,
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
                    // backgroundColor: GRAY_COLOR,
                    src: {
                        fontSize: 30,
                        color: GRAY_DARK_COLOR,
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
                fontSize: 16,
            },
            attach_image: {
                paddingTop: 10,
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