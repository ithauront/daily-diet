import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEAL_COLLECTION } from "storage/storageConfig"
import { mealsGetAll } from "./mealsGetAll"

type Props = {
    name: string
    description: string
    date: string
    time: string
    isOnDiet: boolean
}

export async function mealCreate(newMeal: Props) {
    try {
        const storadedMeals = await mealsGetAll()
        const updatedMeals = [...storadedMeals, newMeal]
        const storage = JSON.stringify(updatedMeals)

        await AsyncStorage.setItem(MEAL_COLLECTION, storage)
    } catch(error) {
        throw error
    }   
}