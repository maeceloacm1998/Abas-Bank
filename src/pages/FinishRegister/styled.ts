import styled from "styled-components/native";

import fonts from "../../styles/fonts";
import { theme } from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextCheckBold = styled.Text`
  font-size: 30px;
  font-weight: bold;
  font-family: ${fonts.Roboto_bold};
  color: ${theme.color.primary};
`;

export const TextCheckRegular = styled.Text`
  font-size: 20px;
  font-family: ${fonts.Roboto_regular};
  color: ${theme.color.primary};
`;
