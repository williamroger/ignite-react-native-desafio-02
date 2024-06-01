/* External */
import { Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

/* Storage */
import { mealRemoveByDateAndId } from '../../storage/meal/mealRemoveByDateAndId';

/* Components */ 
import { Header, Button } from '../../components';
import { Badge } from './components';

/* Styled Components */ 
import {
  Container,
  Content,
  Informations,
  Title,
  Text,
  Label,
  BadgeWrapper,
  Footer,
} from './styles';

interface MealDetailsProps {
  type: 'inside' | 'outside';
}

type RouteParams = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isInsideTheDiet: 'inside' | 'outside' | '';
}

export default function MealDetails() {
  const route = useRoute();
  const navigation = useNavigation();

  const mealData = route.params as RouteParams;

  async function removeMeal() {
    await mealRemoveByDateAndId(mealData.date, mealData.id);
    navigation.navigate('home');
  }

  async function handleRemoveMeal() {
    Alert.alert(
      '', 
      'Deseja realmente excluir o registro da refeição?', 
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancelado pelo usuário.'),
          style: 'cancel',
        },
        {
          text: 'Sim, exluir',
          onPress: () => removeMeal(),
        }
      ]
    );
  }

  function handleEditMeal() {
    navigation.navigate('form', mealData);
  }

  return (
    <Container isInsideTheDiet={mealData.isInsideTheDiet}>
      <Header title="Refeição" />

      <Content>
        <Informations>
          <Title>{mealData.name}</Title>
          <Text>{mealData.description}</Text>
          <Label>Data e hora</Label>
          <Text>{mealData.date} às {mealData.hour}</Text>

          <BadgeWrapper>
            <Badge isInsideTheDiet={mealData.isInsideTheDiet} />
          </BadgeWrapper>
        </Informations>

        <Footer>
          <Button 
            title="Editar refeição" 
            icon="edit" 
            onPress={handleEditMeal}
          />
          <Button 
            title="Excluir refeição" 
            variant="outline" 
            icon="remove"
            onPress={handleRemoveMeal} 
          />
        </Footer>
      </Content>
    </Container>
  )
}