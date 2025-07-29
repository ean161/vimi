import { PermissionsAndroid, Platform, Pressable } from "react-native";
import { React, useState, useEffect, useContext } from "react";

import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Button, Image } from "react-native-ui-lib";
import { GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from "@env";
import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

import googleLogin from "../../api/googleLogin";
import loginByToken from "../../api/loginByToken";

import { UserContext } from "./../../context/userContext";
import { SocketContext } from "../../context/socketContext";

import styles from "../../theme/authStyle";
import commonStyle from "../../theme/commonStyle";

import Storage from "../../utils/storage";

const Auth = ({ navigation }) => {
    const { socketRef, events, isConnected } = useContext(SocketContext);
    const { user, setUser } = useContext(UserContext);

    console.log(isConnected);

    useEffect(() => {
        GoogleSignin.configure({
            iosClientId: GOOGLE_IOS_CLIENT_ID,
            webClientId: GOOGLE_ANDROID_CLIENT_ID
        });
    }, []);

    async function isPermissionGranted() {
        const permission = Platform.select({
            ios: PERMISSIONS.IOS.MICROPHONE,
            android: PERMISSIONS.ANDROID.RECORD_AUDIO,
        });

        const status = await check(permission);

        if (status === RESULTS.GRANTED) {
            return true;
        }

        if (status === RESULTS.DENIED) {
            const result = await request(permission);
            return result === RESULTS.GRANTED;
        }

        return false;
    }

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const login = await googleLogin(userInfo.data.user);

            if (login.status == 1)
                await logged(login);
            else
                Toast.show({
                    type: "error",
                    text1: "Vimi",
                    text2: login.message,
                });
        } catch (error) {
            console.error("Sign in error:", error);
        }
    };

    const logged = async (login, silent = false) => {
        const grantPer = await isPermissionGranted();

        if (!grantPer) {
            Toast.show({
                type: "error",
                text1: "Vimi",
                text2: "Bạn cần cấp quyền trong phần \"Cài đặt\" để tiếp tục",
            });

            return;
        }

        socketRef.current?.send(JSON.stringify({
            type: "login",
            data: login.data.user
        }));

        if (!silent)
            Toast.show({
                type: "success",
                text1: "Vimi",
                text2: login.message,
            });

        setUser(login.data.user);
        await Storage.set("user", login.data.user);
        navigation.replace("Home");
    }

    const savedLogin = async () => {
        const isLoggedBefore = await Storage.has("user");

        if (isLoggedBefore) {
            const loggedData = await Storage.get("user");
            const login = await loginByToken(loggedData.token);
            await Storage.remove("user");

            if (login.status == 1)
                await logged(login, true);
            else {
                Toast.show({
                    type: "error",
                    text1: "Vimi",
                    text2: login.message,
                });
            }
        }
    }

    useEffect(() => {
        if (isConnected)
            savedLogin();
    }, [isConnected]);

    return (
        <SafeAreaView style={commonStyle.wrapper}>
            <View style={styles.card}>
                <Text style={styles.header.text}>vimi</Text>
                <Pressable
                    style={styles.google}
                    onPress={() => {
                        signIn();
                    }}
                >
                    <Image style={styles.google.icon} source={require("./../../assets/img/google.png")} />
                    <Text style={styles.google.text}>Tiếp tục với Google</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default Auth;