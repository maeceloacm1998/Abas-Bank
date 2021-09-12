import React from "react";
import {} from "react-native";

import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import { ListAccounts } from "../pages/ListAccounts";
import { SelectBank } from "../pages/SelectBank";
import { CreateAccount } from "../pages/CreateAccount";

import { theme } from "../styles/theme";

const stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: {
          backgroundColor: theme.color.background,
        },
        headerShown: false,
      }}
      initialRouteName="ListAccounts"
    >
      <stack.Screen name="ListAccounts" component={ListAccounts} />
      <stack.Screen name="SelectBank" component={SelectBank} />
      <stack.Screen name="CreateAccount" component={CreateAccount} />
    </stack.Navigator>
  );
};

export default App;
