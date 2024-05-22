import logoDailyDiet from '../../../../assets/logo.png';

import { Container, ImageLogo, ImageUser } from './styles';

export default function Header() {
  const imageUserURL = 'https://f.i.uol.com.br/fotografia/2023/12/13/17024851436579dc9788a5d_1702485143_3x4_md.jpg';

  return (
    <Container>
      <ImageLogo source={logoDailyDiet} />
      <ImageUser src={imageUserURL} />
    </Container>
  );
}