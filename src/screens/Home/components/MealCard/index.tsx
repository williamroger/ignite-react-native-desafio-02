/* Styled Components */ 
import { 
  Container, 
  WrapperText, 
  Time, 
  Title, 
  Divider, 
  Status 
} from './styles';

interface MealCardProps {
  time: string;
  title: string;
  isInTheDiet: boolean;
}

export default function MealCard({ time, title, isInTheDiet }: MealCardProps) {
  return (
    <Container>
      <WrapperText>
        <Time>{time}</Time>
        <Divider />
        <Title>{title}</Title>
      </WrapperText>
      <Status isInTheDiet={isInTheDiet} />
    </Container>
  )
}