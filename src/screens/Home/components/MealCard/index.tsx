/* External */ 
import { TouchableOpacityProps } from 'react-native';

import { MealType } from '../../../MealForm';

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
  data: MealType;
}

export default function MealCard({ data, ...rest }: MealCardProps) {
  const { hour, name, isInsideTheDiet } = data;
  return (
    <Container {...rest}>
      <WrapperText>
        <Time>{hour}</Time>
        <Divider />
        <Title>{name}</Title>
      </WrapperText>
      <Status isInsideTheDiet={isInsideTheDiet} />
    </Container>
  )
}