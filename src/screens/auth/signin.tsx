import React, { useState } from "react";
import { VStack, Heading, Icon, useTheme } from "native-base";

import Logo from "../../assets/logo_primary.svg";
import { Envelope, Key } from "phosphor-react-native";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { colors } = useTheme();

    async function onPressEntrar() {
        console.log('email', email)
        console.log('password', password)
    }

    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Logo />

            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
            </Heading>

            <Input
                mb={4}
                value={email}
                onChangeText={setEmail}
                placeholder="E-mail"
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
            />

            <Input
                mb={8}
                value={password}
                onChangeText={setPassword}
                placeholder="Senha"
                InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
                secureTextEntry
            />

            <Button title="Entrar" w="full" onPress={onPressEntrar} />
        </VStack>
    );
};
