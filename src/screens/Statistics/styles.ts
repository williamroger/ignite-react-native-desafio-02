import styled from "styled-components/native";

interface ContainerProps {
  isInsideTheDiet: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex: 1;
  background: ${({ theme, isInsideTheDiet }) => isInsideTheDiet ? theme.colors.product.greenLight : theme.colors.product.redLight};
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.base.gray700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding-top: 32px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.base.gray100};
  margin-bottom: 24px;
`;

export const WrapperStatisticsCards = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;