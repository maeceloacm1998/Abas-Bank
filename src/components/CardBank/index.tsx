import React, { memo } from "react";
import {} from "react-native";

import { useNavigation } from "@react-navigation/core";

import { useAllBank } from "../../context/Bank";

import { ContainerCard, TextBold, Button } from "./styled";

interface CardProps {
  data?: AllBanksProps;
}

interface AllBanksProps {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
}

function CardBankComponent({ data }: CardProps) {
  const navigation: any = useNavigation();

  const { bank, setBank } = useAllBank();

  async function onPressButton(item: AllBanksProps | undefined) {
    console.log(item?.name);
    setBank({
      ...bank,
      selectedBank: {
        name: item!.name,
        code: item!.code,
        fullName: item!.fullName,
        ispb: item!.ispb,
      },
    });
    navigation.navigate("ListAccounts");
  }

  return (
    <Button
      onPress={() => {
        onPressButton(data);
      }}
      activeOpacity={0.7}
    >
      <ContainerCard>
        <TextBold>{data?.name}</TextBold>
      </ContainerCard>
    </Button>
  );
}

export const CardBank = memo(CardBankComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});
