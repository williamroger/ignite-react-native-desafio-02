import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { SectionList, StatusBar } from 'react-native';

export const Container = styled.ScrollView`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.base.gray700};

  padding-left: 24px;
  padding-right: 24px;
`;

export const Content = styled(SafeAreaView)`
  padding-top: ${StatusBar.currentHeight}+38px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.base}px;
  color: ${({ theme }) => theme.colors.base.gray100};

  margin-top: 40px;
  margin-bottom: 10px;
`;

export const MealCardList = styled(SectionList)`
  margin-top: 32px;
`;

export const MealHeaderList = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  color: ${({ theme }) => theme.colors.base.gray100};
  margin-bottom: 12px;
`;