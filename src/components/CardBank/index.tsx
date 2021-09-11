import { useNavigation } from "@react-navigation/core";
import React from "react";
import { FlatList } from "react-native";

import { ContainerCard, TextBold, Button } from "./styled";

interface CardProps {
  data?: AllBanksProps[];
}

interface AllBanksProps {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
}

export function CardBank({ data }: CardProps) {
  const navigation: any = useNavigation();

  function onPressButton() {
    navigation.navigate("ListAccounts");
  }

  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      style={{ width: "100%" }}
      renderItem={({ item }) => (
        <Button
          onPress={() => {
            onPressButton();
          }}
          activeOpacity={0.7}
        >
          <ContainerCard>
            <TextBold>{item.name}</TextBold>
          </ContainerCard>
        </Button>
      )}
    />
  );
}
