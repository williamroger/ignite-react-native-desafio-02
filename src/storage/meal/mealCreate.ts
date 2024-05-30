/* Extermal */ 
import AsyncStorage from "@react-native-async-storage/async-storage";

/* Storage */ 
import { MEAL_COLLECTION } from "../storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function mealCreate(meal: string) {
  try {
    const storagedMeals = await mealGetAll();
    const storage = JSON.stringify([...storagedMeals, meal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}