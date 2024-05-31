import styled from "styled-components/native";

interface StatusProps {
  isInsideTheDiet: 'inside' | 'outside' | '';
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 49px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-style: solid;
  border-width: 1.1px;
  border-color: ${({ theme }) => theme.colors.base.gray500};
  border-radius: 6px;

  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 8px;
`;

export const WrapperText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Time = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.xs}px;
  color: ${({ theme }) => theme.colors.base.gray100};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.base}px;
  color: ${({ theme }) => theme.colors.base.gray200};
`;

export const Divider = styled.View`
  width: 1.5px;
  height: 14px;
  background-color: ${({ theme }) => theme.colors.base.gray400};

  margin-left: 12px;
  margin-right: 12px;
`;

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme, isInsideTheDiet }) => 
    isInsideTheDiet === 'inside' ? theme.colors.product.greenMid : theme.colors.product.redMid};
`;
