import { Button } from '../../components';

import insideIllustration from '../../assets/inside-illustration.png';
import outsideIllustration from '../../assets/outside-illustration.png';

import { 
  Container, 
  Header,
  Title, 
  Subtitle, 
  Text, 
  BoldText,
  Image,
} from './styles';

interface FeedbackProps {
  type: 'inside' | 'outside';
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

export function Feedback({ type }: FeedbackProps) {
  const { title, subtitle, image } = FeedbackTexts[type];

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Subtitle>
          {subtitle.map(text => {
            if (text.type === 'text') {
              return <Text>{text.value}</Text>
            } 

            if (text.type === 'bold') {
              return <BoldText>{text.value}</BoldText>
            }
          })}
        </Subtitle>
      </Header>

      <Image source={image}/>

      <Button size="auto" title="Ir para a página inicial" />
    </Container>
  );
}