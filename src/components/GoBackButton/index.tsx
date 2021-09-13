import React from "react";

import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { theme } from "../../styles/theme";

export function GoBackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <FontAwesome name="arrow-left" color={theme.color.primary} size={30} />
    </TouchableOpacity>
  );
}
