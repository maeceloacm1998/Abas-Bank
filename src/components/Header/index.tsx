import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { theme } from "../../styles/theme";

import { Container, TitleHeader, ContainerButton, TextButton } from "./styled";

interface HeaderProps {
  title: string;
  showButtonCreateAccount?: boolean;
}

export function HeaderComponent({
  showButtonCreateAccount,
  title,
}: HeaderProps) {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.color.primary}
        translucent
      />
      <Container centralize={showButtonCreateAccount ? false : true}>
        <TitleHeader>{title}</TitleHeader>

        {showButtonCreateAccount && (
          <TouchableOpacity activeOpacity={0.7}>
            <ContainerButton>
              <FontAwesome
                name="plus-circle"
                size={25}
                color={theme.color.yellow}
              />
              <TextButton>Criar Conta</TextButton>
            </ContainerButton>
          </TouchableOpacity>
        )}
      </Container>
    </>
  );
}
