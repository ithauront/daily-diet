import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEAL_COLLECTION } from "storage/storageConfig"

type Props = {
    name: string
    description: string
    date: string
    time: string
    isOnDiet: boolean
}

export async function mealsGetAll(): Promise<Props[]> {

    try {
      const storage =  await AsyncStorage.getItem(MEAL_COLLECTION)
      const meals: Props[] = storage ? JSON.parse(storage): []

      return meals
    } catch(error) {
        throw error
    }
    
}