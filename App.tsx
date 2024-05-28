/* External */ 
import { ActivityIndicator, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

/* Routes */
import { Routes } from './src/routes';

/* Styled Components */ 
import theme from './src/theme';

/* Google Fonts */ 
import { 
  useFonts, 
  NunitoSans_400Regular, 
  NunitoSans_700Bold 
} from '@expo-google-fonts/nunito-sans';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent={true} />
      {fontsLoaded ? <Routes /> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}