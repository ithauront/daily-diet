import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";
import { MEAL_COLLECTION } from "storage/storageConfig";

export async function mealDeleteOne(mealName: string, mealDate: string, mealTime: string) {
    
    try {
         const storagedMeals = await mealsGetAll();
         const filtred = storagedMeals.filter(meal => !(meal.name === mealName && meal.date === mealDate && meal.time === mealTime))
        
         const meals = JSON.stringify(filtred)

         await AsyncStorage.setItem(MEAL_COLLECTION, meals)
    } catch(error) {
        throw error
    }
}