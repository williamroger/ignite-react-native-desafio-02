import { Container, Icon, Title } from './styles';

interface TypeButtonProps {
  isInsideTheDiet: 'inside' | 'outside' | '';
}

export default function Badge({ isInsideTheDiet }: TypeButtonProps) {
  const title = isInsideTheDiet === 'inside' ? 'dentro da dieta' : 'fora da dieta';
  
  return (
    <Container>
      <Icon isInsideTheDiet={isInsideTheDiet} />
      <Title>{title}</Title>
    </Container>
  )
}