import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Home } from 'screens/Home'
import { Meal } from 'screens/Meal'
import { MealDetails } from 'screens/MealDetails'
import { MealPosted } from 'screens/MealPosted'
import { Stats } from 'screens/Stats'


const { Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes() {

    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name='home' component={Home}/>
            <Screen name='meal' component={Meal}/>
            <Screen name='mealDetails' component={MealDetails}/>
            <Screen name='mealPosted' component={MealPosted}/>
            <Screen name='stats' component={Stats}/>
        </Navigator>
    )
}
