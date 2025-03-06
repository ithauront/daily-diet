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

type MealProps = {
  name: string;
  description: string;
  date: string;
  time: string;
  isOnDiet: boolean;
};

export function Home() {
  const [mealsByDate, setMealsByDate] = useState<{title:string, data:MealProps[]}[]>([])

  async function getMeals() {

    try {
      const meals = await mealsGetAll()

      const groupedMeals = meals.reduce((acc, meal)=>{
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


  function handleMealDetails (onDiet: boolean, dateAndTime: string, description: string, meal:string) {
     navigation.navigate('mealDetails', { dateAndTime, description, meal, onDiet})
  }

  function handleNewMeal () {
    navigation.navigate('meal',{})
  }

  function handleStats (percentage: string) {
    navigation.navigate('stats', {percentage})
  } //TODO fazer o calculo da percentage e guardar em um estado.

  useEffect(()=>{
    getMeals()
  }, [])

  return (
    <Container >
      <HomeHeader>
        <Image source={logo} />
        <Avatar  source={{ uri: 'https://github.com/ithauront.png' }} />
      </HomeHeader>
      <StatsCard percentage='98,03' onPress={()=>handleStats('98,03')} />
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
          <MealListDate>{title.replaceAll('-','.')}</MealListDate>
        )}
        renderItem={({item , section: {title}})=>(
          <MealCard time={item.time} meal={item.name} onDiet={item.isOnDiet} onPress={()=>handleMealDetails(item.isOnDiet, `${title} às ${item.time}` , item.description,  item.name)} />
        )}
        renderSectionFooter={() => <View style={{ height: 32 }} />}
       ListEmptyComponent={<ListEmpty message='Que tal adicionar sua primeira refeição?'/>}
        
      />
    </Container>
  );
}

