import React from "react";
import { View, Alert } from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAllBank } from "../../context/Bank";

import { theme } from "../../styles/theme";

import {
  ContainerCard,
  TextBold,
  TextRegular,
  ContainerDirectionRow,
  ButtonRemoveAccount,
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
  const { bank, setBank } = useAllBank();

  function renderRightActions() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ButtonRemoveAccount
          onPress={() => {
            Alert.alert("Atenção!", "Deseja deletar essa conta?", [
              {
                text: "cancelar",
                onPress: () => {
                  console.log("ok");
                },
              },
              {
                text: "Deletar",
                onPress: () => {
                  const idAccount = item.id;

                  const newBankRegister = bank.bankRegister.filter((item) => {
                    return item.id !== idAccount;
                  });

                  setBank({
                    ...bank,
                    bankRegister: newBankRegister,
                  });

                  AsyncStorage.setItem(
                    "@AbasBank:bankRegister",
                    JSON.stringify(newBankRegister)
                  );
                },
              },
            ]);
          }}
        >
          <FontAwesome
            name="trash-o"
            color={theme.color.background}
            size={25}
          />
        </ButtonRemoveAccount>
      </View>
    );
  }

  return (
    <Swipeable renderRightActions={renderRightActions}>
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
    </Swipeable>
  );
}
