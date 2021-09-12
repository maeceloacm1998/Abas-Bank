import React from "react";
import { View, Text } from "react-native";

import {
  ContainerCard,
  TextBold,
  TextRegular,
  ContainerDirectionRow,
} from "./styled";

interface CardAccountProps {
  item: BankRegisterType;
}

interface BankRegisterType {
  id: number;
  allDataBank: AllBanksType;
  data: { agency: string; account: string };
}

interface AllBanksType {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
}

export function CardAccounts({ item }: CardAccountProps) {
  return (
    <ContainerCard>
      <TextRegular>
        <TextBold>Contas:</TextBold> {item.allDataBank.name}
      </TextRegular>

      <ContainerDirectionRow>
        <TextRegular>
          <TextBold>Agência:</TextBold> {item.data.agency}
        </TextRegular>

        <TextRegular>
          <TextBold>Conta:</TextBold> {item.data.account}
        </TextRegular>
      </ContainerDirectionRow>
    </ContainerCard>
  );
}
