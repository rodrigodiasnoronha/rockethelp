import { useNavigation } from "@react-navigation/native";
import { VStack } from "native-base";
import React from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export const Register: React.FC = () => {

    return (
        <VStack flex={1} p={6} bg="gray.600">
            <Header title="Nova solicitação" />

            <Input placeholder="Número do patrimônio" mt={4}   />
            <Input placeholder="Descrição" mt={5} flex={1} multiline textAlignVertical="top"   />

            <Button title="Cadastrar" mt={5} />
        </VStack>
    );
};
