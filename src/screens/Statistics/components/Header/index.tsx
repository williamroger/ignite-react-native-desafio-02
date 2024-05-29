/* External */ 
import { useNavigation } from '@react-navigation/native';

/* Styled Components */ 
import { 
  Container, 
  BackButton, 
  Icon, 
  Content, 
  Title, 
  Subtitle, 
} from './styles';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const navigation = useNavigation();
  
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <Icon />
      </BackButton>
      <Content>
        <Title>{title}</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </Content>
    </Container>
  )
}