import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";

import { CardBank } from "../../components/CardBank";
import { HeaderComponent } from "../../components/Header";
import { InputComponent } from "../../components/Input";

import api from "../../services/api";

import { useAllBank } from "../../context/Bank";

import { Container, ContainerNotFound, TextNotFound } from "./styled";
import { theme } from "../../styles/theme";

interface AllBanksProps {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
}

export function SelectBank() {
  const [allBanks, setAllBranks] = useState<AllBanksProps[]>([]);
  const [searchList, setAllSearchList] = useState<AllBanksProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [reflash, setReflash] = useState(true);
  const [showNotFoundSearch, setShowNotFoundSearch] = useState<boolean>(false);

  const { bank, setBank } = useAllBank();

  useEffect(() => {
    loadAllBanks();
  }, []);

  const loadAllBanks = useCallback(async () => {
    setLoading(true);

    if (bank.getAllBanks.length === 0) {
      const response: any = await api.get("");

      setBank({ ...bank, getAllBanks: response.data });
      setAllBranks(response.data);
    } else {
      setAllBranks(bank.getAllBanks);
    }

    setLoading(false);
    setReflash(false);
  }, [allBanks]);

  function notFoundSearch(error: any) {
    const findErrorInString = error.toString().includes("404");

    if (findErrorInString) {
      setShowNotFoundSearch(true);
    }
    setLoading(false);
  }

  const searchAllBanks = useCallback(
    async (code: string) => {
      if (code === "") {
        setShowNotFoundSearch(false);
        loadAllBanks();
      } else {
        try {
          setLoading(true);
          const response: any = await api.get(`/${parseInt(code)}`);

          setAllBranks([response.data]);
          setLoading(false);
        } catch (error) {
          notFoundSearch(error);
        }
      }
    },
    [allBanks]
  );

  return (
    <Container>
      <HeaderComponent title="Selecione o banco" />
      <InputComponent
        showSearchButtton
        placeholder="Digite o código do banco"
        keyboardType="number-pad"
        onChangeText={(text) => {
          searchAllBanks(text);
        }}
      />
      {loading ? (
        <ContainerNotFound>
          <ActivityIndicator size="large" color={theme.color.primary} />
        </ContainerNotFound>
      ) : showNotFoundSearch ? (
        <ContainerNotFound>
          <TextNotFound>Conta bancário não{`\n`}encontrada</TextNotFound>
        </ContainerNotFound>
      ) : (
        <FlatList
          data={allBanks}
          showsVerticalScrollIndicator={false}
          initialNumToRender={7}
          refreshing={reflash}
          onRefresh={() => loadAllBanks()}
          style={{ width: "100%" }}
          renderItem={({ item }) => <CardBank data={item} />}
        />
      )}
    </Container>
  );
}
