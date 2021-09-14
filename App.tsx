import "react-native-gesture-handler";
import React, { useEffect } from "react";
import {} from "react-native";

import SplashScreen from "react-native-splash-screen";

import { BankProvider } from "./src/context";

import Stack from "./src/routes";

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <BankProvider>
      <Stack />
    </BankProvider>
  );
}
