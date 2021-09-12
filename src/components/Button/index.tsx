import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Container, TextButton } from "./styled";

interface ButtonProps extends TouchableOpacityProps {
  onPress(): void;
}

export function ButtonComponent({ onPress, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      activeOpacity={0.7}
    >
      <Container {...rest}>
        <TextButton>Criar Conta</TextButton>
      </Container>
    </TouchableOpacity>
  );
}
