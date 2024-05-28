import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Home,
  Feedback,
  MealDetails,
  MealForm,
  Statistics,
} from '../screens';


export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="home"
        component={Home}
      />
      <Screen 
        name="feedback"
        component={Feedback}
      />
      <Screen 
        name="form"
        component={MealForm}
      />
      <Screen 
        name="details"
        component={MealDetails}
      />
      <Screen 
        name="statistics"
        component={Statistics}
      />
    </Navigator>
  )
}