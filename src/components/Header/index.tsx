import { useNavigation } from "@react-navigation/native";
import { Heading, HStack, IconButton, StyledProps, useTheme } from "native-base";
import { CaretLeft } from "phosphor-react-native";
import React from "react";

type HeaderProps = StyledProps & {
    title: string;
};

export const Header: React.FC<HeaderProps> = ({ title, ...rest }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    return (
        <HStack w="full" justifyContent="space-between" alignItems="center" bg="gray.600" pb={6} pt={12} {...rest}>
            <IconButton icon={<CaretLeft color={colors.gray[200]} size={24} />} onPress={navigation.goBack} />

            <Heading color="gray.100" textAlign="center" fontSize="lg" flex={1} pl={-6}>
                {title}
            </Heading>
        </HStack>
    );
};
