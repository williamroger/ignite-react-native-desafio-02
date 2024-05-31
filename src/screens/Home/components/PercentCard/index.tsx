/* External */ 
import { TouchableOpacityProps } from 'react-native';

/* Styled Components */
import { Container, Title, Subtitle, Icon } from './styles';

interface PercentCardProps extends TouchableOpacityProps {
  title: number;
  isInsideTheDiet: boolean;
}

export default function PercentCard({ title, isInsideTheDiet, ...rest }: PercentCardProps) {
  return (
    <Container isInsideTheDiet={isInsideTheDiet} {...rest}>
      <Title>{`${title}%`}</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
      <Icon />
    </Container>
  )
}