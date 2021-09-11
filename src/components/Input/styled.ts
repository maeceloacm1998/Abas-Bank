import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.View`
  flex-direction: row;
  height: 50px;
  width: 90%;
  justify-content: center;
  margin: 20px 0;

  border: 2px solid ${theme.color.primary};
  border-radius: 30px;
`;

export const TextInput = styled.TextInput`
  width: 80%;
  color: ${theme.color.primary};
`;
