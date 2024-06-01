/* Storage */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
import { MEAL_COLLECTION } from "../storageConfig";

export async function mealRemoveByDateAndId(mealDate: string, mealId: string) {
  try {
    const mealsStoraged = await mealGetAll();
    const mealsFiltered = mealsStoraged.map(mapMeal => {
      if (mapMeal.title === mealDate) {
        const newMealData = mapMeal.data.filter(filterMeal => filterMeal.id !== mealId);
        mapMeal.data = newMealData;
      }

      return mapMeal;
    });

    const mealsToStorage = JSON.stringify(mealsFiltered);

    await AsyncStorage.setItem(MEAL_COLLECTION, mealsToStorage);
  } catch (error) {
    throw error;
  }
}