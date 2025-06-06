import { React, useState, useEffect, useContext } from "react";
import { View, Text, Button } from "react-native-ui-lib";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import { GOOGLE_IOS_CLIENT_ID } from '@env';

import commonStyle from "../../theme/commonStyle";
import authStyle from "../../theme/authStyle";
import Storage from "../../utils/storage";
import googleLogin from "../../api/googleLogin";
import loginByToken from "../../api/loginByToken";
import Toast from "react-native-toast-message";
import { UserContext } from "./../../context/userContext";
import { SocketContext } from "../../context/socketContext";

GoogleSignin.configure({
    iosClientId: GOOGLE_IOS_CLIENT_ID
});

const Auth = ({ navigation }) => {
    const { socketRef, events, isConnected } = useContext(SocketContext)
    const { user, setUser } = useContext(UserContext);

    console.log(isConnected);

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
            <View style={authStyle.container}>
                <Text
                    marginB-30
                    style={authStyle.container.title}
                >Vimi</Text>
                {
                    (isConnected ? 
                        <Button style={authStyle.container.loginBtn} onPress={signIn}>
                            <Text>Login with Google</Text>
                        </Button>
                        : <></>
                    )
                }
                
            </View>
        </SafeAreaView>
    );
}

export default Auth;