import { Container, Title, Subtitle } from './styles';

type StatisticsCardTypes = 'default' | 'in-the-diet' | 'off-the-diet';

interface StatisticsCardProps {
  variant?: StatisticsCardTypes;
  title: number;
  subtitle: string;
}

export default function StatisticsCard({ variant = 'default', title, subtitle }: StatisticsCardProps) {
  return (
    <Container variant={variant}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}