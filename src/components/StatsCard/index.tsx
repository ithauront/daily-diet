import { TouchableOpacityProps } from "react-native"
import { CardColorStyleProps, Container, Icon, SubTitle, Title } from "./styles"

    type Props = TouchableOpacityProps & {
        children?: React.ReactNode
        type? : CardColorStyleProps
        percentage: string
    }

export function StatsCard({type='GREEN', percentage, ...rest}:Props){
    return(
        <Container type={type} {...rest}>
            <Icon type={type} />
            <Title>{percentage}%</Title>
            <SubTitle>das refeições dentro da dieta</SubTitle>
        </Container>

    )
}