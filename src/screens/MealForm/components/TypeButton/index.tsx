import { Container, Title, Icon, } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface TypeButtonProps extends TouchableOpacityProps {
  title: string;
  type: 'inside' | 'outside';
  isActive?: boolean;
}

export default function TypeButton({ title, type, isActive = false, ...rest }: TypeButtonProps) {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Icon type={type} />
      <Title>{title}</Title>
    </Container>
  )
}