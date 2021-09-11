import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-status-bar-height";
const barHeight = getStatusBarHeight();

import fonts from "../../styles/fonts";
import { theme } from "../../styles/theme";

export const Container = styled.View`
  margin-top: ${barHeight}px;
  flex: 1;
`;

export const ContainerNotFound = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextNotFound = styled.Text`
  font-size: 25px;
  font-family: ${fonts.Roboto_bold};
  text-align: center;
  color: ${theme.color.primary};

  margin-bottom: 25px;
`;

export const ContainerAllAccounts = styled.View`
  border: 1px solid red;
  flex: 1;
  align-items: center;
  padding: 15px;
`;
