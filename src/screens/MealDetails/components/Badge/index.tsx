import { Container, Icon, Title } from './styles';

interface TypeButtonProps {
  title: string;
  type: 'inside' | 'outside';
}

export default function Badge({ title, type }: TypeButtonProps) {
  return (
    <Container>
      <Icon type={type} />
      <Title>{title}</Title>
    </Container>
  )
}