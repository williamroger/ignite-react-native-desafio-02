import styled from "styled-components/native";

interface ContainerProps {
  isInsideTheDiet: 'inside' | 'outside' | '';
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex: 1;
  background-color: ${({ theme, isInsideTheDiet }) => isInsideTheDiet === 'inside' 
    ? theme.colors.product.greenLight 
    : theme.colors.product.redLight};
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.base.gray700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding-top: 32px;
  padding-bottom: 54px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Informations = styled.View`

`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.colors.base.gray100};
  margin-bottom: 5px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.base}px;
  color: ${({ theme }) => theme.colors.base.gray100};
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.base.gray100};
  margin-bottom: 5px;
`;

export const BadgeWrapper = styled.View`
  flex-direction: row;
`;

export const Footer = styled.View`
  gap: 12px;
`;