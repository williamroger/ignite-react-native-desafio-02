import { Container, BackButton, Icon, Content, Title, } from './styles';

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
      </Content>
    </Container>
  )
}