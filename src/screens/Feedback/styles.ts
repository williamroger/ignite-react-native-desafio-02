import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex: 1;

  justify-content: center;
  align-items: center;

  padding-left: 24px;
  padding-right: 24px;
`;

export const Header = styled.View`
  margin-bottom: 38px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xl}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.product.greenDark};
`;

export const Subtitle = styled.Text`
  text-align: center;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.base}px;
  color: ${({ theme }) => theme.colors.base.gray100};
`;

export const BoldText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.base}px;
  color: ${({ theme }) => theme.colors.base.gray100};
`;

export const Image = styled.Image`
  width: 224px;
  height: 288px;
  margin-bottom: 38px;
`;