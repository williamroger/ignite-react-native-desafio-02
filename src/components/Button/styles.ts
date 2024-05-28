import styled from "styled-components/native";
import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native"; 

type ButtonTypes = 'solid' | 'outline';
type ButtonSize = 'large' | 'auto';

interface ButtonProps {
  variant?: ButtonTypes;
  size?: ButtonSize;
}

interface IconProps {
  variant?: ButtonTypes;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: ${({ size }) => size === 'large' ?  '100%' : 'auto'};
  height: 50px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, variant }) => variant === 'solid' ? theme.colors.base.gray200 : 'transparent' };
  
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.base.gray200 };
  border-radius: 6px;

  padding-left: 24px;
  padding-right: 24px;
`;

export const Title = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme, variant }) => variant === 'solid' ? theme.colors.base.white : theme.colors.base.gray200};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
`;

export const IconPlus = styled(Plus).attrs<IconProps>(({theme, variant}) => ({
  size: 18,
  weight: 'bold',
  color: variant === 'solid' ?  theme.colors.base.white : theme.colors.base.gray200,
}))`
  margin-right: 12px;
`;

export const IconPencilSimpleLine = styled(PencilSimpleLine).attrs<IconProps>(({ theme, variant }) => ({
  size: 18,
  weight: 'bold',
  color: variant === 'solid' ? theme.colors.base.white : theme.colors.base.gray200,
}))`
  margin-right: 12px;
`;

export const IconTrash = styled(Trash).attrs<IconProps>(({ theme, variant }) => ({
  size: 18,
  weight: 'bold',
  color: variant === 'solid' ? theme.colors.base.white : theme.colors.base.gray200,
}))`
  margin-right: 12px;
`;

