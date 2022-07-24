import React from "react";

import { SignIn } from "./src/screens/auth/signin";

import { THEME } from "./src/styles/theme";

import { NativeBaseProvider } from "native-base";

export default function App() {
    return (
        <NativeBaseProvider theme={THEME}>
            <SignIn />
        </NativeBaseProvider>
    );
}
