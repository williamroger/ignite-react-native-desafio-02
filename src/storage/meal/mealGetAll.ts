/* External */
import AsyncStorage from "@react-native-async-storage/async-storage";

/* Storage */
import { MEAL_COLLECTION } from "../storageConfig";

/* Interface */
import { MealType } from "../../screens/MealForm";

export type MealListType = {
  title: string;
  data: MealType[];
}

export async function mealGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: MealListType[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}