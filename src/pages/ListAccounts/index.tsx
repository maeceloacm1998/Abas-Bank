import React, { useCallback, useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";

import LottieView from "lottie-react-native";

import { HeaderComponent } from "../../components/Header";
import { ButtonComponent } from "../../components/Button";
import { CardAccounts } from "../../components/CardAccount";

import { useAllBank } from "../../context/Bank";

import notFound from "../../assets/NotFoundAccount.json";

import {
  Container,
  ContainerNotFound,
  TextNotFound,
  ContainerAllAccounts,
} from "./syled";

import { theme } from "../../styles/theme";

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

export function ListAccounts({ navigation }: any) {
  const [allAccounts, setAllAccount] = useState<BankRegisterType[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [reflash, setReflash] = useState(true);

  const { bank } = useAllBank();

  useEffect(() => {
    loadAllAccounts();
  }, [bank.getAllBanks]);

  const loadAllAccounts = useCallback(async () => {
    setLoading(true);

    await setAllAccount(bank.bankRegister);

    setLoading(false);
    setReflash(false);
  }, [allAccounts]);

  if (loading) {
    return (
      <ContainerNotFound>
        <ActivityIndicator size="large" color={theme.color.primary} />
      </ContainerNotFound>
    );
  } else {
    return (
      <Container>
        <HeaderComponent title="Contas" showButtonCreateAccount />

        {bank.bankRegister.length > 0 ? (
          <ContainerAllAccounts>
            <FlatList
              data={bank.bankRegister}
              style={{ width: "90%" }}
              refreshing={reflash}
              onRefresh={() => loadAllAccounts()}
              renderItem={({ item }) => <CardAccounts item={item} />}
            />
          </ContainerAllAccounts>
        ) : (
          <ContainerNotFound>
            <LottieView
              source={notFound}
              autoPlay
              cacheComposition
              cacheStrategy="weak"
              style={{ width: 200, height: 200 }}
            />
            <TextNotFound>Nenhuma conta {`\n`} foi criada</TextNotFound>
            <ButtonComponent
              onPress={() => {
                navigation.navigate("SelectBank");
              }}
            />
          </ContainerNotFound>
        )}
      </Container>
    );
  }
}
