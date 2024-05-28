import { ActivityIndicator, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { 
  useFonts, 
  NunitoSans_400Regular, 
  NunitoSans_700Bold 
} from '@expo-google-fonts/nunito-sans';

import { Home } from './src/screens/Home';
import { Statistics } from './src/screens/Statistics';
import { MealForm } from './src/screens/MealForm';
import { Feedback } from './src/screens/Feedback';
import { MealDetails } from './src/screens/MealDetails';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent={true} />
      {fontsLoaded ? <MealDetails type="inside" /> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}