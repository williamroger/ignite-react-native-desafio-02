import styled from "styled-components/native";

import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;
  height: 200px;

  justify-content: center;

  padding-left: 24px;
  padding-right: 24px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 34px;
  height: 34px;
  align-items: start;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xxl}px;
  color: ${({ theme }) => theme.colors.base.gray100};
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.base.gray200};
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.colors.product.greenDark,
  size: 24,
}))``;