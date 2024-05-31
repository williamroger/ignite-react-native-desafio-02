/* External */ 
import { useCallback, useEffect, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

/* Components */ 
import { Button } from '../../components';
import { PercentCard, Header, MealCard } from './components';

/* Storage */ 
import { MealListType, mealGetAll } from '../../storage/meal/mealGetAll';

/* Styled Components */ 
import { 
  Container, 
  Content, 
  Label,
  MealCardSectionList,
  MealHeaderList,
} from "./styles";

export default function Home() {
  const navigation = useNavigation();
  const [meals, setMeals] = useState<MealListType[]>([]);
  
  function handleGoStatistics() {
    navigation.navigate('statistics');
  }

  function handleGoForm() {
    navigation.navigate('form');
  }

  function handleGoDetails() {
    navigation.navigate('details');
  }

  function formatDate(date: string) {
    return date.replaceAll('/', '.');
  }

  async function fetchMeals() {
    try {
      const mealsStoraged = await mealGetAll();
      setMeals(mealsStoraged);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals();
  }, []));

  return (
    <Container showsVerticalScrollIndicator={false} >
      <Content>
        <Header />

        <PercentCard 
          title="90,86%" 
          isInTheDiet={true}
          onPress={handleGoStatistics} 
        />
        
        <Label>
          Refeições
        </Label>
        
        <Button 
          title="Nova refeição" 
          icon="add" 
          onPress={handleGoForm}
        />

        <MealCardSectionList
          scrollEnabled={false}
          sections={meals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MealCard
              data={item}
              onPress={handleGoDetails}
            />
          )}
          renderSectionHeader={({section: {title}}) => (
            <MealHeaderList>{formatDate(title)}</MealHeaderList>
          )}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
}