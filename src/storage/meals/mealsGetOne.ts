import { mealsGetAll } from "./mealsGetAll"

type Props = {
    name: string
    description: string
    date: string
    time: string
    isOnDiet: boolean
}

export async function mealsGetOne(mealName: string, mealDate: string, mealTime: string): Promise<Props | null> {

    try {
    const storagedMeals = await mealsGetAll();
    const mealFound = storagedMeals.find(meal => meal.name === mealName && meal.date === mealDate && meal.time === mealTime)

      return mealFound || null

    } catch(error) {
        throw error
    }
    
}