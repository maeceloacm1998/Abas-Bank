import styled from "styled-components/native";
import fonts from "../../styles/fonts";
import { theme } from "../../styles/theme";

export const Container = styled.View`
  height: 50px;
  width: 150px;
  justify-content: center;
  align-items: center;

  background-color: ${theme.color.primary};
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  font-family: ${fonts.Roboto_bold};
  color: ${theme.color.background};
`;
