import styled from "styled-components/native";

interface InputWrapperProps {
  size?: 'large' | 'small';
}

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.base.gray500};
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

export const FormContent = styled.View`
  width: 100%;
`;

export const DateWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const GroupTypeButton = styled.View``;

export const TypeButtonWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  color: ${({ theme }) => theme.colors.base.gray200};
  margin-bottom: 5px;
`;

export const ErrorText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  color: ${({ theme }) => theme.colors.product.redDark};
  margin-top: 4px;
`;

export const InputWrapper = styled.View<InputWrapperProps>`
  width: ${({ size }) => size === 'small' ? 47 : 100}%;
  margin-bottom: 24px;
`;