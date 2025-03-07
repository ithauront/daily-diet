import AsyncStorage from "@react-native-async-storage/async-storage"
import { mealsGetAll } from "./mealsGetAll"
import { MEAL_COLLECTION } from "storage/storageConfig"

type MealProps = {
    name: string
    description: string
    date: string
    time: string
    isOnDiet: boolean
}

type Props = {
    meal: MealProps
    oldName: string
    oldTime: string
    oldDate: string
}

export async function mealUpdate({oldDate, oldName, oldTime, meal}:Props) {

    try {
    const storagedMeals = await mealsGetAll();
    const updatedMeals = storagedMeals.map(oldMeal =>
        oldMeal.name === oldName && oldMeal.date === oldDate && oldMeal.time === oldTime ? meal : oldMeal
    );
    
    const storage = JSON.stringify(updatedMeals)

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)

    } catch(error) {
        throw error
    }
    
}