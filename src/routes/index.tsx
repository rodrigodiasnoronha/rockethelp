import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes: React.FC = () => {
    const is_logged = true;

    return <NavigationContainer>{is_logged ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>;
};
