/* Components */ 
import { View } from 'react-native';
import { Button } from '../../components';
import { PercentCard, Header, MealCard } from './components';

/* Styled Components */ 
import { 
  Container, 
  Content, 
  Label,
  MealCardList,
  MealHeaderList,
} from "./styles";

export function Home() {
  const data = [
    {
      title: '12.05.24',
      data: [
        { time: '09:43', title: 'Sanduíche de Presunto', isInTheDiet: true },
        { time: '10:30', title: 'Biscoito Treloso', isInTheDiet: false },
        { time: '12:00', title: 'Feijoada Completa', isInTheDiet: false },
        { time: '14:23', title: 'Whey com Creatina', isInTheDiet: true },
        { time: '16:23', title: 'Maça com mel', isInTheDiet: true },
      ]
    },
    {
      title: '13.05.24',
      data: [
        { time: '09:43', title: 'Sanduíche de Presunto', isInTheDiet: true },
        { time: '10:30', title: 'Biscoito Treloso', isInTheDiet: false },
        { time: '12:00', title: 'Feijoada Completa', isInTheDiet: false },
        { time: '14:23', title: 'Whey com Creatina', isInTheDiet: true },
        { time: '16:23', title: 'Maça com mel', isInTheDiet: true },
      ]
    },
    {
      title: '14.05.24',
      data: [
        { time: '09:43', title: 'Sanduíche de Presunto', isInTheDiet: true },
        { time: '10:30', title: 'Biscoito Treloso', isInTheDiet: false },
        { time: '12:00', title: 'Feijoada Completa', isInTheDiet: false },
        { time: '14:23', title: 'Whey com Creatina', isInTheDiet: true },
        { time: '16:23', title: 'Maça com mel', isInTheDiet: true },
      ]
    },
    {
      title: '15.05.24',
      data: [
        { time: '09:43', title: 'Sanduíche de Presunto', isInTheDiet: true },
        { time: '10:30', title: 'Biscoito Treloso', isInTheDiet: false },
        { time: '12:00', title: 'Feijoada Completa', isInTheDiet: false },
        { time: '14:23', title: 'Whey com Creatina', isInTheDiet: true },
        { time: '16:23', title: 'Maça com mel', isInTheDiet: true },
      ]
    }
  ];
  
  return (
    <Container showsVerticalScrollIndicator={false} >
      <Content>
        <Header />
        <PercentCard title="90,86%" isInTheDiet={true} />
        <Label>
          Refeições
        </Label>
        
         <Button title="Nova refeição" icon="add" />

        <MealCardList
          scrollEnabled={false}
          sections={data}
          keyExtractor={(item) => item.time}
          renderItem={({ item }) => (
            <MealCard
              time={item.time}
              title={item.title}
              isInTheDiet={item.isInTheDiet}
            />
          )}
          renderSectionHeader={({section: {title}}) => (
            <MealHeaderList>{title}</MealHeaderList>
          )}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
}