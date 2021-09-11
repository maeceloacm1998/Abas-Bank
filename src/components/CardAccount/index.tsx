import React from "react";
import { View, Text } from "react-native";

import {
  ContainerCard,
  TextBold,
  TextRegular,
  ContainerDirectionRow,
} from "./styled";

interface CardAccountProps {
  data?: object[];
}

export function CardAccounts({ data }: CardAccountProps) {
  return (
    <ContainerCard>
      <TextRegular>
        <TextBold>Contas:</TextBold> Banco Central do Brasil
      </TextRegular>

      <ContainerDirectionRow>
        <TextRegular>
          <TextBold>Agência:</TextBold> 12567
        </TextRegular>

        <TextRegular>
          <TextBold>Conta:</TextBold> 1230423-4
        </TextRegular>
      </ContainerDirectionRow>
    </ContainerCard>
  );
}
