import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: 24px;
  padding-bottom: 24px;
`;

export const ImageLogo = styled.Image``;

export const ImageUser = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.base.gray200};
`;