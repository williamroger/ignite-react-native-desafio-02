/* Storage */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
import { MEAL_COLLECTION } from "../storageConfig";
import { MealType } from '../../screens/MealForm';

export async function mealUpdate(mealUpdate: MealType) {
  try {
    const mealsStoraged = await mealGetAll();
    const mealByDateIndex = mealsStoraged.findIndex(meal => meal.title === mealUpdate.date);

    if (mealByDateIndex !== -1) {
      const mealByIDIndex = mealsStoraged[mealByDateIndex].data.findIndex(meal => meal.id === mealUpdate.id);
      const newMealsToUpdate = mealsStoraged.map(meal => {
        if (meal.title === mealUpdate.date) {
          meal.data[mealByIDIndex] = mealUpdate;
        }
        return meal;
      });

      const mealsToStorage = JSON.stringify(newMealsToUpdate);
      await AsyncStorage.setItem(MEAL_COLLECTION, mealsToStorage);
    }
  } catch (error) {
    throw error;
  }
}