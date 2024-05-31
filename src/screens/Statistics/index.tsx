/* External */ 
import { useRoute } from '@react-navigation/native';

/* Components */ 
import { Header, StatisticsCard } from './components';

/* Styled Components */ 
import { 
  Container, 
  Content, 
  Title, 
  WrapperStatisticsCards 
} from './styles';

type RouteParams = {
  totalMeals: number,
  totalMealsInside: number,
  totalMealsOutside: number,
  percentageOfMeals: number,
  bestDietSequence: number,
  isInsideTheDiet: boolean,
}

export default function Statistics() {
  const route = useRoute();
  const {
    totalMeals,
    totalMealsInside,
    totalMealsOutside,
    percentageOfMeals,
    bestDietSequence,
    isInsideTheDiet,
  } = route.params as RouteParams;

  const data = {
    title: '90,86%',
    isInTheDiet: true,
  }

  return (
    <Container isInsideTheDiet={isInsideTheDiet} >
      <Header title={percentageOfMeals} />

      <Content>
        <Title>Estatísticas gerais</Title>
        <WrapperStatisticsCards>
          <StatisticsCard 
            title={bestDietSequence} 
            subtitle="melhor sequência de pratos dentro da dieta" 
          />
        </WrapperStatisticsCards>
        <WrapperStatisticsCards>
          <StatisticsCard 
            title={totalMeals}
            subtitle="refeições registradas"
          />
        </WrapperStatisticsCards>
        <WrapperStatisticsCards>
          <StatisticsCard 
            title={totalMealsInside}
            subtitle="refeições dentro da dieta"
            variant="in-the-diet"
          />
          <StatisticsCard 
            title={totalMealsOutside} 
            subtitle="refeições fora da dieta" 
            variant="off-the-diet"
          />
        </WrapperStatisticsCards>
      </Content>
    </Container>
  )
}