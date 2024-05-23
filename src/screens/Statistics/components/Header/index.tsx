import { Container, BackButton, Icon, Content, Title, Subtitle, } from './styles';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Container>
      <BackButton>
        <Icon />
      </BackButton>
      <Content>
        <Title>{title}</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </Content>
    </Container>
  )
}