import { placeholder } from "@babel/types";
import React from "react";
import { TextInputProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { theme } from "../../styles/theme";

import { Container, TextInput } from "./styled";

interface InputProps extends TextInputProps {
  showSearchButtton?: boolean;
  placeholder: string;
}

export function InputComponent({
  showSearchButtton,
  placeholder,
  ...rest
}: InputProps) {
  return (
    <Container>
      <TextInput
        {...rest}
        placeholder={placeholder}
        placeholderTextColor={theme.color.primary}
      />
      {showSearchButtton && (
        <FontAwesome
          name="search"
          size={30}
          color={theme.color.primary}
          style={{ marginTop: 5 }}
        />
      )}
    </Container>
  );
}
