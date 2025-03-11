import { StatsCard } from 'components/StatsCard';
import { Container, Main, Title, BoxContainer, OnDietBoxContainer} from './styles'
import { StatsBox } from 'components/StatsBox';
import { useRoute } from '@react-navigation/native';
import { mealsGetAll } from 'storage/meals/mealsGetAll';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

type RouteParams = {
    percentage: string
}

export function Stats () {
    const route = useRoute()
    const { percentage } = route.params as RouteParams
    const type = Number(percentage.replace(",", ".")) >= 50 ? 'GREEN' : 'RED';
    const [totalMeals, setTotalMeals] = useState(0)
    const [onDietStreak, setOnDietStreak] = useState(0)
    const [totalOnDiet, setTotalOnDiet] = useState(0)
    const [totalOffDiet, setTotalOffDiet] = useState(0)

    function calculateDietStreak (meals: {isOnDiet:boolean, date: string, time:string}[]) {
        const sortedMeals = meals.sort((a,b)=>{
            const dateTimeA = dayjs(`${a.date}T${a.time}`).valueOf();
            const dateTimeB = dayjs(`${b.date}T${b.time}`).valueOf();
            return dateTimeB - dateTimeA
        })
        let currentStreak = 0
        let maxStreak = 0

        for(const meal of sortedMeals) {
            if(meal.isOnDiet) {
                currentStreak++
            } else {
                maxStreak = Math.max(maxStreak, currentStreak)
                currentStreak = 0
            }
        }
        setOnDietStreak(Math.max(maxStreak, currentStreak));
    }

    async function calculateStats() {
       const meals = await mealsGetAll()
        setTotalMeals(meals.length)
        
        calculateDietStreak(meals)

        const { onDiet, offDiet } = meals.reduce((acc, meal)=>{
           meal.isOnDiet ? acc.onDiet++ : acc.offDiet++
           return acc
        }, {onDiet: 0, offDiet: 0})
        setTotalOnDiet(onDiet)
        setTotalOffDiet(offDiet)
    }
    useEffect(()=>{
        calculateStats()
    }, [])
    return (
        <Container type={type}>
            <StatsCard percentage={percentage} asHeader/>
            <Main>
                <Title>Estatísticas gerais</Title>
                <BoxContainer>
                    <StatsBox quantity={onDietStreak} subject='Melhor sequencia de pratos dentro da dieta' />
                    <StatsBox quantity={totalMeals} subject='Refeições registradas' />
                    <OnDietBoxContainer>
                        <StatsBox quantity={totalOnDiet} subject='Refeições dentro da dieta' type='GREEN' />
                        <StatsBox quantity={totalOffDiet} subject='Refeições fora da dieta' type='RED' />
                    </OnDietBoxContainer>
                </ BoxContainer>
                
            </Main>
        </Container>
    )
}