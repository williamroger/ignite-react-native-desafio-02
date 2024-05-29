/* External */ 
import { TouchableOpacityProps } from 'react-native';

/* Styled Components */ 
import { 
  Container, 
  WrapperText, 
  Time, 
  Title, 
  Divider, 
  Status 
} from './styles';

interface MealCardProps extends TouchableOpacityProps {
  time: string;
  title: string;
  isInTheDiet: boolean;
}

export default function MealCard({ time, title, isInTheDiet, ...rest }: MealCardProps) {
  return (
    <Container {...rest}>
      <WrapperText>
        <Time>{time}</Time>
        <Divider />
        <Title>{title}</Title>
      </WrapperText>
      <Status isInTheDiet={isInTheDiet} />
    </Container>
  )
}