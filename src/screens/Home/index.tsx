import {Image,  SectionList, View} from 'react-native'
import { Avatar, Container,  HomeHeader, MealListDate, Title } from './styles';
import logo from '../../../assets/Logo.png'
import { Button } from 'components/Button';
import { Plus } from 'phosphor-react-native';
import theme from 'theme';
import { StatsCard } from 'components/StatsCard';
import { MealCard } from 'components/MealCard';
import { useNavigation } from '@react-navigation/native';
import { ListEmpty } from 'components/ListEmpty';
import { mealsGetAll } from 'storage/meals/mealsGetAll';
import { useEffect, useState } from 'react';
//TODO organizar um pouco como o codigo esta sendo apresentado, colocar tipos d estrutura juntas, ajustar imports etc. em todos arquivos
type MealProps = {
  name: string;
  description: string;
  date: string;
  time: string;
  isOnDiet: boolean;
};

export function Home() {
  const [mealsByDate, setMealsByDate] = useState<{title:string, data:MealProps[]}[]>([])
  const [percentage, setPercentage] = useState('')

  async function getMeals() {

    try {
      const meals = await mealsGetAll()
      const totalMeals = meals.length
      const mealsOnDiet = meals.filter(meals => meals.isOnDiet === true).length
      const percentageOfMealsOnDiet = totalMeals > 0 
            ? (mealsOnDiet / totalMeals) * 100
            : 0
      const formattedPercentage = percentageOfMealsOnDiet === 100 || percentageOfMealsOnDiet === 0 
                ? Math.round(percentageOfMealsOnDiet).toString()
                : percentageOfMealsOnDiet.toFixed(2);
      setPercentage(formattedPercentage)

      const sortedMeals = meals.sort((a, b) => {
        const dateTimeA = new Date(`${a.date}T${a.time}`).getTime();
        const dateTimeB = new Date(`${b.date}T${b.time}`).getTime();
        return dateTimeB - dateTimeA;
    });

      const groupedMeals = sortedMeals.reduce((acc, meal)=>{
        if(!acc[meal.date]) {
          acc[meal.date] = []
        }
        acc[meal.date].push(meal)
        return acc
      }, {} as Record<string, MealProps[]>)

      const formatedMeals = Object.keys(groupedMeals)
      .sort((a,b)=> new Date(b).getTime() - new Date(a).getTime())
      .map((date)=>({
        title: date,
        data: groupedMeals[date]
      }))

      setMealsByDate(formatedMeals)

    } catch (error) {
      console.error("Erro ao buscar refeições:", error);
    }
    
  }

  const navigation= useNavigation()


  function handleMealDetails (onDiet: boolean, date: string, time: string, description: string, meal:string) {
     navigation.navigate('mealDetails', { date, time, description, meal, onDiet})
  }

  function handleNewMeal () {
    navigation.navigate('meal',{})
  }

  function handleStats (percentage: string) {
    navigation.navigate('stats', {percentage})
  }

  useEffect(()=>{
    getMeals()
  }, [])

  return (
    <Container >
      <HomeHeader>
        <Image source={logo} />
        <Avatar  source={{ uri: 'https://github.com/ithauront.png' }} />
      </HomeHeader>
      <StatsCard percentage={percentage} onPress={()=>handleStats(percentage)} />
      <View style={{gap: 8, height: 79}}>
      <Title>Refeições</Title>
      <Button title='Nova refeição' onPress={()=>handleNewMeal()}>
        <Plus color={theme.COLORS.WHITE} size={18} /> 
      </Button>
      </View>
      <SectionList 
        showsVerticalScrollIndicator={false}
        sections={mealsByDate}
        keyExtractor={(item, index) => item.name + index}
        renderSectionHeader={({section: {title}}) => (
          <MealListDate>{new Date(title).toLocaleDateString("pt-BR")
            .replaceAll('/','.')
            .replace(/\d{4}$/, match => match.slice(-2))}
            </MealListDate>
        )}
        renderItem={({item , section: {title}})=>(
          <MealCard time={item.time} meal={item.name} onDiet={item.isOnDiet} onPress={()=>handleMealDetails(item.isOnDiet, title, item.time , item.description,  item.name)} />
        )}
        renderSectionFooter={() => <View style={{ height: 32 }} />}
       ListEmptyComponent={<ListEmpty message='Que tal adicionar sua primeira refeição?'/>}
        
      />
    </Container>
  );
}

