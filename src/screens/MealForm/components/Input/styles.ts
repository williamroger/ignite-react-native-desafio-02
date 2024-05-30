import styled, { css } from "styled-components/native";
import MaskInput from 'react-native-mask-input';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.base.gray200};
  margin-bottom: 5px;
`;

export const TextInput = styled(MaskInput)`
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