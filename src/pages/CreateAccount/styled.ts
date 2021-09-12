import styled from "styled-components/native";

import fonts from "../../styles/fonts";
import { theme } from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContainerAllDataBank = styled.View`
  padding: 15px;
  justify-content: center;
  align-items: center;
`;

export const TextBold = styled.Text`
  font-size: 18px;
  font-family: ${fonts.Roboto_bold};
  color: ${theme.color.primary};
`;

export const TextRegular = styled.Text`
  font-size: 16px;
  font-family: ${fonts.Roboto_regular};
  color: ${theme.color.text_black};
  margin: 5px;
`;

export const ContainerDirectionRow = styled.View`
  flex-direction: row;
`;

export const ContainerAllComponents = styled.View`
  flex: 1;
  margin: 20px 0;
  align-items: center;
`;

export const TextError = styled.Text`
  font-family: ${fonts.Roboto_regular};
  color: ${theme.color.warn};
`;
