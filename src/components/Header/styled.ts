import styled from "styled-components/native";
import fonts from "../../styles/fonts";
import { theme } from "../../styles/theme";

interface HeaderStyled {
  centralize: boolean;
}

export const Container = styled.View<HeaderStyled>`
  width: 100%;

  align-items: center;
  justify-content: ${(props) =>
    props.centralize ? "center" : "space-between"};
  flex-direction: row;
  padding: 25px;

  background-color: ${theme.color.primary};
`;

export const TitleHeader = styled.Text`
  font-size: 25px;
  font-family: ${fonts.Roboto_bold};
  color: ${theme.color.background};
`;

export const ContainerButton = styled.View`
  justify-content: center;
  flex-direction: row;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  font-family: ${fonts.Roboto_bold};
  color: ${theme.color.background};
  margin-left: 10px;
`;
