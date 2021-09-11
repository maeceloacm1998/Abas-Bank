import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import { ListAccounts } from "../pages/ListAccounts";
import { theme } from "../styles/theme";

const stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.color.background,
        },
        headerShown: false,
      }}
      initialRouteName="ListAccounts"
    >
      <stack.Screen name="ListAccounts" component={ListAccounts} />
    </stack.Navigator>
  );
};

export default App;
