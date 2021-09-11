import styled from "styled-components/native";
import fonts from "../../styles/fonts";
import { theme } from "../../styles/theme";

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ContainerCard = styled.View`
  width: 75%;
  padding: 15px 30px;
  margin: 10px 0;

  background-color: ${theme.color.secundary};
  border-radius: 10px;
`;

export const TextBold = styled.Text`
  font-size: 18px;
  font-family: ${fonts.Roboto_bold};
  text-align: center;
  color: ${theme.color.primary};
`;
