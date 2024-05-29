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

const BadgeTexts = {
  inside: 'dentro da dieta',
  outside: 'fora da dieta',
}

// { type }: MealDetailsProps

export default function MealDetails() {
  return (
    <Container type="inside">
      <Header title="Refeição" />

      <Content>
        <Informations>
          <Title>Sanduíche</Title>
          <Text>Sanduíche de pão integral com atum e salada de alface e tomate</Text>
          <Label>Data e hora</Label>
          <Text>12/08/2022 às 16:00</Text>

          <BadgeWrapper>
            <Badge type="inside" title={BadgeTexts["inside"]} />
          </BadgeWrapper>
        </Informations>

        <Footer>
          <Button title="Editar refeição" icon="edit" />
          <Button title="Excluir refeição" variant="outline" icon="remove" />
        </Footer>
      </Content>
    </Container>
  )
}