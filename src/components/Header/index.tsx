/* External */
import { useNavigation } from '@react-navigation/native';

/* Styled Components */ 
import { 
  Container, 
  BackButton, 
  Icon, 
  Content, 
  Title, 
} from './styles';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const navitagion = useNavigation();

  function handleGoBack() {
    navitagion.goBack();
  }
  
  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <Icon />
      </BackButton>
      <Content>
        <Title>{title}</Title>
      </Content>
    </Container>
  )
}