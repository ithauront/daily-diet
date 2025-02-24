
import { Container, Item, Separator, StatusIndicator, Time, TimeTitleContainer } from "./styles";

type Props = {
    time: string
    meal: string
    onDiet: boolean
}

export function MealCard({time, meal, onDiet}:Props) {
   const statusType = onDiet === true ? 'GREEN' : 'RED'
    return(
        <Container>
            <TimeTitleContainer>
                <Time>{time}</Time>
                <Separator />
                <Item>{meal}</Item>
            </TimeTitleContainer>
            <StatusIndicator type={statusType}/>

        </Container>
    )
}