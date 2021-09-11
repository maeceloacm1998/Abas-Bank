import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

import { CardBank } from "../../components/CardBank";
import { HeaderComponent } from "../../components/Header";
import { InputComponent } from "../../components/Input";

import api from "../../services/api";

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
  const [showNotFoundSearch, setShowNotFoundSearch] = useState<boolean>(false);

  useEffect(() => {
    loadAllBanks();
  }, []);

  const loadAllBanks = useCallback(async () => {
    setLoading(true);
    const response: any = await api.get("");
    setAllBranks(response.data);
    setLoading(false);
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
      if (!code) {
        setShowNotFoundSearch(false);
        setAllSearchList([]);
        loadAllBanks();
      } else {
        try {
          setLoading(true);
          const response: any = await api.get(`/${parseInt(code)}`);

          setAllSearchList([response.data]);
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
        <CardBank data={searchList.length ? searchList : allBanks} />
      )}
    </Container>
  );
}
