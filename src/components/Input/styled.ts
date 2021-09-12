import styled from "styled-components/native";

import fonts from "../../styles/fonts";
import { theme } from "../../styles/theme";

export const Container = styled.View`
  flex-direction: row;
  height: 50px;
  width: 90%;
  justify-content: center;
  margin: 10px 0;

  border: 2px solid ${theme.color.primary};
  border-radius: 30px;
`;

export const TextInput = styled.TextInput`
  width: 80%;
  color: ${theme.color.primary};
`;

export const ContainerLabel = styled.View`
  width: 100%;
  padding: 0 25px;
  margin-top: 10px;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-family: ${fonts.Roboto_bold};
  color: ${theme.color.primary};
`;
