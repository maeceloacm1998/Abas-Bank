import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";

import AppRoute from "../routes/app.routes";

import { NavigationContainer } from "@react-navigation/native";

const Routes: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <AppRoute />
      </NavigationContainer>
    </>
  );
};

export default Routes;
