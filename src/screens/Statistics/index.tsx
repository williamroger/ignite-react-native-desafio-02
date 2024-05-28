/* Components */ 
import { Header, StatisticsCard } from './components';

/* Styled Components */ 
import { 
  Container, 
  Content, 
  Title, 
  WrapperStatisticsCards 
} from './styles';

interface StatisticsProps {
  isInTheDiet: boolean;
}

export default function Statistics() {
  const data = {
    title: '90,86%',
    isInTheDiet: true,
  }

  return (
    <Container isInTheDiet={data.isInTheDiet} >
      <Header title={data.title} />

      <Content>
        <Title>Estatísticas gerais</Title>
        <WrapperStatisticsCards>
          <StatisticsCard 
            title="22" 
            subtitle="melhor sequência de pratos dentro da dieta" 
          />
        </WrapperStatisticsCards>
        <WrapperStatisticsCards>
          <StatisticsCard 
            title="109"
            subtitle="refeições registradas"
          />
        </WrapperStatisticsCards>
        <WrapperStatisticsCards>
          <StatisticsCard 
            title="99" 
            subtitle="refeições dentro da dieta"
            variant="in-the-diet"
          />
          <StatisticsCard 
            title="10" 
            subtitle="refeições dentro da dieta" 
            variant="off-the-diet"
          />
        </WrapperStatisticsCards>
      </Content>
    </Container>
  )
}