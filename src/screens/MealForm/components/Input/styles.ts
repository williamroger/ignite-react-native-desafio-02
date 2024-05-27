import styled, { css } from "styled-components/native";

interface ContainerProps {
  size: 'large' | 'small';
}

export const Container = styled.View<ContainerProps>`
  ${({ size }) => size === 'large' && css`
    width: 100%;
  `};
  ${({ size }) => size === 'small' && css`
    width: 47%;
  `};
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.base.gray200};
  margin-bottom: 5px;
`;

export const TextInput = styled.TextInput`
  
  height: ${({ multiline }) => multiline ? 120 : 48}px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.base.gray500};
  border-radius: 6px;

  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.base}px;
  color: ${({ theme }) => theme.colors.base.gray100};

  padding-left: 16px;
  padding-right: 16px;
`;