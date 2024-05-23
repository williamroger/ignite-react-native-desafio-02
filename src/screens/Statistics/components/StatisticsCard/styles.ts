import styled, { css } from "styled-components/native";

type StatisticsCardTypes = 'default' | 'in-the-diet' | 'off-the-diet';

interface StatisticsCardProps {
  variant: StatisticsCardTypes;
}

export const Container = styled.View<StatisticsCardProps>`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding-left: 18px;
  padding-right: 18px;
  padding-top: 20px;
  padding-bottom: 20px;

  border-radius: 8px;
  margin-bottom: 12px;
  
  ${({ variant }) => (
    variant === 'default' && css`background-color: ${({theme}) => theme.colors.base.gray600}`
  )};
  ${({ variant }) => (
    variant === 'in-the-diet' && css`background-color: ${({ theme }) => theme.colors.product.greenLight}`
  )};
  ${({ variant }) => (
    variant === 'off-the-diet' && css`background-color: ${({ theme }) => theme.colors.product.redLight}`
  )};
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
  text-align: center;
`;