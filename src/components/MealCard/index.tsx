import { TouchableOpacityProps } from "react-native";
import { Container, Item, Separator, StatusIndicator, Time, TimeTitleContainer } from "./styles";

type Props =  TouchableOpacityProps & {
    time: string
    meal: string
    onDiet: boolean
}

export function MealCard({time, meal, onDiet, onPress}:Props) {
   const statusType = onDiet === true ? 'GREEN' : 'RED'
    return(
        <Container onPress={onPress}>
            <TimeTitleContainer>
                <Time>{time}</Time>
                <Separator />
                <Item>{meal}</Item>
            </TimeTitleContainer>
            <StatusIndicator type={statusType}/>
        </Container>
    )
}