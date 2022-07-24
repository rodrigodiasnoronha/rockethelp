import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/chamados/home";
import { Register } from "../screens/chamados/register";
import { Details } from "../screens/chamados/details";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes: React.FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            <Screen name="chamado_register" component={Register} />
            <Screen name="chamado_details" component={Details} />
        </Navigator>
    );
};
