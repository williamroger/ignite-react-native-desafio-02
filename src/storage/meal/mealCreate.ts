/* Extermal */ 
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';

/* Storage */ 
import { MEAL_COLLECTION } from "../storageConfig";
import { mealGetAll } from "./mealGetAll";

/* Interface */
import { MealType } from "../../screens/MealForm";

export async function mealCreate(mealData: MealType) {
  try {
    const storagedMeals = await mealGetAll();
    const mealsByDate = storagedMeals.find(meal => meal.title === mealData.date);
    let mealsToStorage = '';

    if (mealsByDate) {
      const newStoragedMeals = storagedMeals.map(meal => {
        if (meal.title === mealData.date) {
          meal.data = [
            ...meal.data,
            mealData,
          ]
        }
        return meal;
      });
      mealsToStorage = JSON.stringify(newStoragedMeals);
    } else {
      mealData.id = String(uuid.v4());
      const newMealData = {
        title: mealData.date,
        data: [mealData],
      }
      mealsToStorage = JSON.stringify([newMealData]);
    }

    await AsyncStorage.setItem(MEAL_COLLECTION, mealsToStorage);
  } catch (error) {
    throw error;
  }
}