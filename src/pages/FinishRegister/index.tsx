import React, { useEffect } from "react";

import LottieView from "lottie-react-native";
import Check from "../../assets/Check.json";

import { Container, TextCheckBold, TextCheckRegular } from "./styled";

export function FinishRegister({ navigation }: any) {
  useEffect(() => {
    const startScreen = async () => {
      await new Promise(function (resolve) {
        setTimeout(resolve, 2000);
      });

      navigation.navigate("ListAccounts");
    };

    startScreen();
  }, [navigation]);

  return (
    <Container>
      <LottieView source={Check} autoPlay style={{ width: 200, height: 200 }} />
      <TextCheckBold>Sucesso !</TextCheckBold>
      <TextCheckRegular>Conta criada com sucesso.</TextCheckRegular>
    </Container>
  );
}
