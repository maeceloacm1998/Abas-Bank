import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Container, TextButton } from "./styled";

interface ButtonProps {
  onPress(): void;
}

export function ButtonComponent({ onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      activeOpacity={0.7}
    >
      <Container>
        <TextButton>Criar Conta</TextButton>
      </Container>
    </TouchableOpacity>
  );
}
