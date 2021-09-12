import React from "react";
import { TextInputProps } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { theme } from "../../styles/theme";

import { Container, TextInput, ContainerLabel, Label } from "./styled";

interface InputProps extends TextInputProps {
  showSearchButtton?: boolean;
  placeholder: string;
  label?: string;
}

export function InputComponent({
  showSearchButtton,
  placeholder,
  label,
  ...rest
}: InputProps) {
  return (
    <>
      {label && (
        <ContainerLabel>
          <Label>{label}</Label>
        </ContainerLabel>
      )}
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
    </>
  );
}
