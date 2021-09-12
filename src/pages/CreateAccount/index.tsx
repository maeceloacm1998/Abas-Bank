import React from "react";
import { Text, View, KeyboardAvoidingView, Platform } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useForm, Controller } from "react-hook-form";

import { HeaderComponent } from "../../components/Header";
import { ButtonComponent } from "../../components/Button";
import { InputComponent } from "../../components/Input";

import { useAllBank } from "../../context/Bank";

import {
  Container,
  ContainerAllDataBank,
  TextBold,
  TextRegular,
  ContainerDirectionRow,
  ContainerAllComponents,
  TextError,
} from "./styled";

import fonts from "../../styles/fonts";
import { theme } from "../../styles/theme";

interface AllBanksProps {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
}

export function CreateAccount({ navigation }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { bank } = useAllBank();

  function createAccount(data: AllBanksProps) {
    console.log(data);
  }

  console.log(errors.account);

  return (
    <Container>
      <HeaderComponent title="Criar conta" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ContainerAllDataBank>
          <TextRegular>
            <TextBold>Banco: </TextBold>
            {bank.selectedBank.name}
          </TextRegular>

          <ContainerDirectionRow>
            <TextRegular>
              <TextBold>Código: </TextBold>
              {bank.selectedBank.code ? bank.selectedBank.code : "--.--"}
            </TextRegular>
            <TextRegular>
              <TextBold>ISPB: </TextBold>
              {bank.selectedBank.ispb ? bank.selectedBank.ispb : "--.--"}
            </TextRegular>
          </ContainerDirectionRow>
        </ContainerAllDataBank>

        <ContainerAllComponents>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputComponent
                label="Agência:"
                placeholder="Digite a agência"
                keyboardType="number-pad"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="agency"
            defaultValue={""}
            rules={{
              required: {
                value: true,
                message:
                  "* É necessário digitar o número da sua \nnova agência.",
              },
              maxLength: {
                value: 4,
                message:
                  "* O número da agência pode ter \nno máximo 6 digitos.",
              },
            }}
          />
          {errors.agency && <TextError>{errors.agency.message}</TextError>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputComponent
                label="Conta:"
                placeholder="Digite a conta"
                keyboardType="number-pad"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="account"
            defaultValue={""}
            rules={{
              required: {
                value: true,
                message: "* É necessário digitar o número da sua \nnova conta.",
              },
              maxLength: {
                value: 6,
                message: "* O número da conta pode ter \nno máximo 6 digitos.",
              },
            }}
          />
          {errors.account && <TextError>{errors.account.message}</TextError>}

          <ButtonComponent
            style={{ marginVertical: 20 }}
            onPress={handleSubmit(createAccount)}
          />
        </ContainerAllComponents>
      </KeyboardAvoidingView>
    </Container>
  );
}