import "react-native-gesture-handler";
import React from "react";
import {} from "react-native";

import { BankProvider } from "./src/context";

import Stack from "./src/routes";

export default function App() {
  return (
    <BankProvider>
      <Stack />
    </BankProvider>
  );
}
