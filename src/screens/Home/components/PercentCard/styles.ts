import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ArrowUpRight } from 'phosphor-react-native';

interface PercentCardProps {
  isInTheDiet: boolean;
}

export const Container = styled(TouchableOpacity)<PercentCardProps>`
  width: 100%;
  height: 102px;
  background: ${({ theme, isInTheDiet }) => isInTheDiet ? theme.colors.product.greenLight : theme.colors.product.redLight};
  border-radius: 8px;
  
  justify-content: center;
  align-items: center;
  position: relative;
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

export const Icon = styled(ArrowUpRight).attrs(({theme}) => ({
  color: theme.colors.product.greenDark,
  size: 24,
}))`
  position: absolute;
  right: 14px;
  top: 14px;
`;