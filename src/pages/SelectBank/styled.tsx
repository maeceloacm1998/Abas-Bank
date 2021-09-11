import styled from "styled-components/native";

import fonts from "../../styles/fonts";
import { theme } from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
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
