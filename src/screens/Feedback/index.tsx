/* External */
import { useRoute, useNavigation } from '@react-navigation/native';

/* Components */ 
import { Button } from '../../components';

/* Assets */
import insideIllustration from '../../assets/inside-illustration.png';
import outsideIllustration from '../../assets/outside-illustration.png';

/* Styled Components */
import { 
  Container, 
  Header,
  Title, 
  Subtitle, 
  Text, 
  BoldText,
  Image,
} from './styles';

type RouteParams = {
  isInsideTheDiet: 'inside' | 'outside';
}

const FeedbackTexts = {
  inside: {
    title: 'Continue assim!',
    subtitle: [
      {
        type: 'text',
        value: 'Você continua',
      },
      {
        type: 'bold',
        value: ' dentro da dieta',
      },
      {
        type: 'text',
        value: '. Muito bem!',
      },
    ],
    image: insideIllustration,
  },
  outside: {
    title: 'Que pena!',
    subtitle: [
      {
        type: 'text',
        value: 'Você ',
      },
      {
        type: 'bold',
        value: 'saiu da dieta ',
      },
      {
        type: 'text',
        value: 'dessa vez, mas continue se esforçando e não desista!',
      }
    ],
    image: outsideIllustration,
  }
}

export default function Feedback() {
  const route = useRoute();
  const navigation = useNavigation();

  const { isInsideTheDiet } = route.params as RouteParams;
 
  const { title, subtitle, image } = FeedbackTexts[isInsideTheDiet];

  function handleGoHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Subtitle>
          {subtitle.map(text => {
            if (text.type === 'text') {
              return <Text key={text.value}>{text.value}</Text>
            } 

            if (text.type === 'bold') {
              return <BoldText key={text.value}>{text.value}</BoldText>
            }
          })}
        </Subtitle>
      </Header>

      <Image source={image}/>

      <Button 
        size="auto" 
        title="Ir para a página inicial" 
        onPress={handleGoHome}
      />
    </Container>
  );
}