/* External */ 
import { TouchableOpacityProps } from 'react-native';

/* Styled Components */
import { Container, Title, Subtitle, Icon } from './styles';

interface PercentCardProps extends TouchableOpacityProps {
  title: string;
  isInTheDiet: boolean;
}

export default function PercentCard({ title, isInTheDiet, ...rest }: PercentCardProps) {
  return (
    <Container isInTheDiet={isInTheDiet} {...rest}>
      <Title>{title}</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
      <Icon />
    </Container>
  )
}