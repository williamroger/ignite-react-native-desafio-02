import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;
  height: 100px;
 
  flex-direction: row;
  align-items: center;

  padding-top: ${StatusBar.currentHeight}+30px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.colors.base.gray100};
  text-align: center;
  
  width: 100%;
  margin-left: -48px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.colors.base.gray200,
  size: 24,
}))``;