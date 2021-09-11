import React from "react";
import { Text, View } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

import { HeaderComponent } from "../../components/Header";
import { ButtonComponent } from "../../components/Button";
import { CardAccounts } from "../../components/CardAccount";

import {
  Container,
  ContainerNotFound,
  TextNotFound,
  ContainerAllAccounts,
} from "./syled";

import fonts from "../../styles/fonts";
import { theme } from "../../styles/theme";

export function ListAccounts({ navigation }: any) {
  return (
    <Container>
      <HeaderComponent title="Contas" showButtonCreateAccount />

      {/* <ContainerAllAccounts>
        <CardAccounts />
        <CardAccounts />
      </ContainerAllAccounts> */}
      <ContainerNotFound>
        <FontAwesome name="id-card" size={80} color={theme.color.primary} />
        <TextNotFound>Nenhuma conta {`\n`} foi criada</TextNotFound>
        <ButtonComponent
          onPress={() => {
            navigation.navigate("SelectBank");
          }}
        />
      </ContainerNotFound>
    </Container>
  );
}
