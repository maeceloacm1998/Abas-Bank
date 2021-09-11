import styled from "styled-components/native";
import fonts from "../../styles/fonts";
import { theme } from "../../styles/theme";

export const ContainerCard = styled.View`
  width: 90%;
  padding: 15px 10px;
  margin: 10px 0;

  background-color: ${theme.color.secundary};
  border-radius: 10px;
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
