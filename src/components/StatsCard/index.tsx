import { TouchableOpacityProps } from "react-native"
import { CardColorStyleProps, Container, IconExpand, IconBack, SubTitle, Title } from "./styles"

    type Props = TouchableOpacityProps & {
        children?: React.ReactNode
        type? : CardColorStyleProps
        percentage: string
        asHeader? : boolean
    }

export function StatsCard({type='GREEN', percentage, asHeader=false, ...rest}:Props){
    return(
        <Container type={type} {...rest}>
            {asHeader?<IconBack  type={type}/>: <IconExpand type={type}/>}
            <Title>{percentage}%</Title>
            <SubTitle>das refeições dentro da dieta</SubTitle>
        </Container>

    )
}