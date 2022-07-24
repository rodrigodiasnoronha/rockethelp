import React from "react";

import { Text, VStack } from "native-base";
import { Header } from "../../components/Header";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
    order_id: string;
};

export const Details: React.FC = () => {
    const route = useRoute();
    const { order_id } = route.params as RouteParams;

    return (
        <VStack flex={1} bg="gray.700">
            <Header title="Solicitação" />

            <Text color="white">{order_id}</Text>
        </VStack>
    );
};
