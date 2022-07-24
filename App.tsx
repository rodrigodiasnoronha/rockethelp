import React, { useEffect } from "react";

import { SignIn } from "./src/screens/auth/signin";

import { THEME } from "./src/theme/theme";

import { NativeBaseProvider, StatusBar } from "native-base";

import * as SplashScreen from "expo-splash-screen";
import { useFonts, Roboto_700Bold, Roboto_400Regular } from "@expo-google-fonts/roboto";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
    let [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

    useEffect(() => {
        if (fontsLoaded) {
            startApp();
        }
    }, [fontsLoaded]);

    const startApp = async () => {
        // This tells the splash screen to hide immediately! If we call this after
        // `fontsLoaded`, then we may see a blank screen while the app is
        // loading its initial state and rendering its first pixels. So instead,
        // we hide the splash screen once we know the root view has already
        // performed layout.
        await SplashScreen.hideAsync();
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NativeBaseProvider theme={THEME}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent // faz a status bar ficar da cor do app abaixo dela
            />
            <SignIn />
        </NativeBaseProvider>
    );
}
