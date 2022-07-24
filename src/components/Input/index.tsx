import { Input as NativeBaseInput, IInputProps as NativeBaseInputProps } from "native-base";

export const Input: React.FC<NativeBaseInputProps> = (props) => {
    return (
        <NativeBaseInput
            bg="gray.700"
            height={14}
            size="md"
            borderWidth={0}
            fontSize="md"
            fontFamily="body"
            color="white"
            placeholderTextColor="gray.300"
            _focus={{
                borderWidth: 1,
                borderColor: "green.500",
                bg: "gray.700",
            }}
            {...props}
        />
    );
};
