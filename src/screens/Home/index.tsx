import {Image,  SectionList, View} from 'react-native'
import { Avatar, Container,  HomeHeader, MealListDate, Title } from './styles';
import logo from '../../../assets/Logo.png'
import { Button } from 'components/Button';
import { Plus } from 'phosphor-react-native';
import theme from 'theme';
import { StatsCard } from 'components/StatsCard';
import { MealCard } from 'components/MealCard';
import { useState } from 'react';



export function Home() {

  const mealsByDate = [
    {
      title: '12.08.25',
      data: [
        { id: '1', time: '20:00', meal: 'X-tudo', onDiet: false },
        { id: '2', time: '16:30', meal: 'Salada', onDiet: true },
      ],
    },
    {
      title: '13.08.25',
      data: [
        { id: '3', time: '12:00', meal: 'Sanduíche', onDiet: true },
        { id: '4', time: '18:00', meal: 'Pizza', onDiet: false },
      ],
    },
    {
      title: '13.08.25',
      data: [
        { id: '3', time: '12:00', meal: 'Sanduíche', onDiet: true },
        { id: '4', time: '18:00', meal: 'Pizza', onDiet: false },
      ],
    },
    {
      title: '13.08.25',
      data: [
        { id: '3', time: '12:00', meal: 'Sanduíche', onDiet: true },
        { id: '4', time: '18:00', meal: 'Pizza', onDiet: false },
      ],
    },
    {
      title: '13.08.25',
      data: [
        { id: '3', time: '12:00', meal: 'Sanduíche', onDiet: true },
        { id: '4', time: '18:00', meal: 'Pizza', onDiet: false },
      ],
    },
    {
      title: '13.08.25',
      data: [
        { id: '3', time: '12:00', meal: 'Sanduíche', onDiet: true },
        { id: '4', time: '18:00', meal: 'Pizza', onDiet: false },
      ],
    },
    {
      title: '12.08.25',
      data: [
        { id: '1', time: '20:00', meal: 'X-tudo', onDiet: false },
        { id: '2', time: '16:30', meal: 'Salada', onDiet: true },
      ],
    },
    {
      title: '12.08.25',
      data: [
        { id: '1', time: '20:00', meal: 'X-tudo', onDiet: false },
        { id: '2', time: '16:30', meal: 'Salada', onDiet: true },
      ],
    },
    {
      title: '12.08.25',
      data: [
        { id: '1', time: '20:00', meal: 'X-tudo', onDiet: false },
        { id: '2', time: '16:30', meal: 'Salada', onDiet: true },
      ],
    },
  ];



  return (
    <Container >
      <HomeHeader>
        <Image source={logo} />
        <Avatar  source={{ uri: 'https://github.com/ithauront.png' }} />
      </HomeHeader>
      <StatsCard percentage='98,03' />
      <View style={{gap: 8, height: 79}}>
      <Title>Refeições</Title>
      <Button title='Nova refeição'>
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
        renderItem={({item})=>(
          <MealCard time={item.time} meal={item.meal} onDiet={item.onDiet} />
        )}
        renderSectionFooter={() => <View style={{ height: 32 }} />}
       
        
      />
    </Container>
  );
}

