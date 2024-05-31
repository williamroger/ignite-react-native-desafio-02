/* External */ 
import { useCallback, useEffect, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

/* Components */ 
import { Button } from '../../components';
import { PercentCard, Header, MealCard } from './components';

/* Storage */ 
import { MealListType, mealGetAll } from '../../storage/meal/mealGetAll';

/* Interface */
import { MealType } from '../MealForm';

/* Styled Components */ 
import { 
  Container, 
  Content, 
  Label,
  MealCardSectionList,
  MealHeaderList,
} from "./styles";

type StatisticsType = {
  totalMeals: number,
  totalMealsInside: number,
  totalMealsOutside: number,
  percentageOfMeals: number,
  bestDietSequence: number,
  isInsideTheDiet: boolean,
}

export default function Home() {
  const navigation = useNavigation();
  const [meals, setMeals] = useState<MealListType[]>([]);
  const [statistics, setStatistics] = useState<StatisticsType>({} as StatisticsType);

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

  function getMealsStatistics(mealsData: MealListType[]) {
    const allMeals: MealType[] = mealsData.reduce((total, currentItem) => {
      return total.concat(currentItem?.data as any);
    }, []);
    const totalMeals = allMeals.length;
    const totalMealsInside = allMeals.filter(meal => meal?.isInsideTheDiet === 'inside').length;
    const totalMealsOutside = allMeals.filter(meal => meal?.isInsideTheDiet === 'outside').length;
    const percentageOfMeals = totalMeals ? Number(Number((totalMealsInside / totalMeals) * 100).toFixed(2)) : 0;
    const isInsideTheDiet = totalMealsInside >= totalMealsOutside;
    
    let sequence = 0;
    const bestDietSequence = allMeals.reduce((acc, item) => {
      if (item.isInsideTheDiet === 'inside') {
        sequence = sequence + 1;
      } else {
        if (sequence > acc) {
          acc = sequence;
          sequence = 0;
        }
      }

      return acc;
    }, 0);

    if (totalMeals) {
      setStatistics({
        totalMeals,
        totalMealsInside,
        totalMealsOutside,
        percentageOfMeals,
        bestDietSequence,
        isInsideTheDiet,
      });
    }
  }

  async function fetchMeals() {
    try {
      const mealsStoraged = await mealGetAll();
      
      setMeals(mealsStoraged);
      getMealsStatistics(mealsStoraged);
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

        {statistics.totalMeals && (
          <PercentCard
            title={statistics.percentageOfMeals}
            isInsideTheDiet={statistics.isInsideTheDiet}
            onPress={handleGoStatistics}
          />
        )}
        
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
              data={item as MealType}
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