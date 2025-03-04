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



export function Home() {

  const mealsByDate = [
    {
      title: '12.08.25',
      data: [
        { id: '1', time: '20:00', meal: 'X-tudo', onDiet: false, description: 'Uma otima refeição' },
        { id: '2', time: '16:30', meal: 'Salada', onDiet: true, description: 'Uma otima refeição' },
      ],
    },
    {
      title: '13.08.25',
      data: [
        { id: '3', time: '12:00', meal: 'Sanduíche', onDiet: true, description: 'Uma otima refeição' },
        { id: '4', time: '18:00', meal: 'Pizza', onDiet: false , description: 'Uma otima refeição'},
      ],
    },
    {
      title: '13.08.25',
      data: [
        { id: '3', time: '12:00', meal: 'Sanduíche', onDiet: true , description: 'Uma otima refeição'},
        { id: '4', time: '18:00', meal: 'Pizza', onDiet: false , description: 'Uma otima refeição'},
      ],
    },
    {
      title: '13.08.25',
      data: [
        { id: '3', time: '12:00', meal: 'Sanduíche', onDiet: true, description: 'Uma otima refeição' },
        { id: '4', time: '18:00', meal: 'Pizza', onDiet: false, description: 'Uma otima refeição' },
      ],
    },
    {
      title: '13.08.25',
      data: [
        { id: '3', time: '12:00', meal: 'Sanduíche', onDiet: true, description: 'Uma otima refeição' },
        { id: '4', time: '18:00', meal: 'Pizza', onDiet: false, description: 'Uma otima refeição' },
      ],
    },
    {
      title: '13.08.25',
      data: [
        { id: '3', time: '12:00', meal: 'Sanduíche', onDiet: true , description: 'Uma otima refeição'},
        { id: '4', time: '18:00', meal: 'Pizza', onDiet: false , description: 'Uma otima refeição'},
      ],
    },
    {
      title: '12.08.25',
      data: [
        { id: '1', time: '20:00', meal: 'X-tudo', onDiet: false, description: 'Uma otima refeição' },
        { id: '2', time: '16:30', meal: 'Salada', onDiet: true, description: 'Uma otima refeição' },
      ],
    },
    {
      title: '12.08.25',
      data: [
        { id: '1', time: '20:00', meal: 'X-tudo', onDiet: false, description: 'Uma otima refeição' },
        { id: '2', time: '16:30', meal: 'Salada', onDiet: true, description: 'Uma otima refeição' },
      ],
    },
    {
      title: '12.08.25',
      data: [
        { id: '1', time: '20:00', meal: 'X-tudo', onDiet: false, description: 'Uma otima refeição' },
        { id: '2', time: '16:30', meal: 'Salada', onDiet: true, description: 'Uma otima refeição' },
      ],
    },
  ];

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
        keyExtractor={item => item.id}
        renderSectionHeader={({section: {title}}) => (
          <MealListDate>{title}</MealListDate>
        )}
        renderItem={({item , section: {title}})=>(
          <MealCard time={item.time} meal={item.meal} onDiet={item.onDiet} onPress={()=>handleMealDetails(item.onDiet, `${title} às ${item.time}` , item.description,  item.meal)} />
        )}
        renderSectionFooter={() => <View style={{ height: 32 }} />}
       ListEmptyComponent={<ListEmpty message='Que tal adicionar sua primeira refeição?'/>}
        
      />
    </Container>
  );
}

