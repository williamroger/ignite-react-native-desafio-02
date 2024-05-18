import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.base.gray700};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xxl}px;
  color: ${({ theme }) => theme.colors.product.redDark };
`;