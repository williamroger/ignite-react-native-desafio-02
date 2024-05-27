import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

interface IconProps {
  type: 'inside' | 'outside';
}

interface TypeButtonProps {
  type: 'inside' | 'outside';
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity) <TypeButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 47%;
  height: 50px;

  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.base.gray600};

  ${({ theme, isActive, type }) => isActive === true && type === 'inside' && css`
    background-color: ${theme.colors.product.greenLight};
    border-color: ${theme.colors.product.greenDark};
  `};

  ${({ theme, isActive, type }) => isActive === true && type === 'outside' && css`
    background-color: ${theme.colors.product.redLight};
    border-color: ${theme.colors.product.redDark};
  `};
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
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.base.gray100};
`;