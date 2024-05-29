/* External */ 
import { useNavigation } from '@react-navigation/native';

/* Components */ 
import { Header, Button } from '../../components';
import { Input, TypeButton } from './components';

/* Styled Components */ 
import { 
  Container, 
  Content, 
  FormContent,
  WrapperDate, 
  GroupTypeButton, 
  WrapperTypeButton, 
  Label, 
} from './styles';

export default function MealForm() {
  const navigation = useNavigation();

  function handleRegisterMeal() {
    // add code here
    navigation.navigate('home'); 
  }

  return (
    <Container>
      <Header title="Nova refeição" />
      <Content>
        <FormContent>
          <Input label="Nome" />
          <Input label="Descrição" multiline={true} />
          <WrapperDate>
            <Input label="Data" size='small' />
            <Input label="Hora" size='small' />
          </WrapperDate>
          <GroupTypeButton>
            <Label>Está dentro da dieta?</Label>
            <WrapperTypeButton>
              <TypeButton type='inside' title="Sim" isActive={false} />
              <TypeButton type='outside' title="Não" isActive={true} />
            </WrapperTypeButton>
          </GroupTypeButton>
        </FormContent>
        <Button 
          title="Cadastrar refeição" 
          onPress={handleRegisterMeal}  
        />
      </Content>
    </Container>
  )
}