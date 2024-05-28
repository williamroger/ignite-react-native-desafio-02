import styled from "styled-components/native";

interface IconProps {
  type: 'inside' | 'outside';
}

export const Container = styled.View`
  height: 34px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme }) => theme.colors.base.gray600};
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 50%;
`;

export const Icon = styled.View<IconProps>`
  width: 8px;
  height: 8px;

  border-radius: 50%;
  background-color: ${({ theme, type }) => type === 'inside'
    ? theme.colors.product.greenDark
    : theme.colors.product.redDark
  };
  margin-right: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.base.gray100};
`;