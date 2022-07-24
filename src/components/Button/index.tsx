import { Button as NativeBaseButton, IButtonProps as NativeBaseButtonProps, Heading } from "native-base";

type ButtonProps = NativeBaseButtonProps & {
    title: string;
};

export const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
    return (
        <NativeBaseButton
            bg="green.700"
            h={14}
            fontSize="sm"
            rounded="sm"
            _pressed={{
                bg: "green.500",
            }}
            {...rest}
        >
            <Heading color="white" fontSize="sm">
                {title}
            </Heading>
        </NativeBaseButton>
    );
};
