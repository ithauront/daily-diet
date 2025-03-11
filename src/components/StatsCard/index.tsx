import { TouchableOpacityProps } from "react-native"
import { Container, IconExpand, IconBack, SubTitle, Title, BackButton } from "./styles"
import { useNavigation } from "@react-navigation/native"

type Props = TouchableOpacityProps & {
        children?: React.ReactNode
        percentage: string
        asHeader? : boolean
    }

export function StatsCard({ percentage, asHeader=false, ...rest}:Props){
    const type = Number(percentage.replace(",", ".")) >= 50 ? 'GREEN' : 'RED';
    const navigation = useNavigation() 

    function handleGoBack(){
            navigation.navigate('home')
        }
        
    return(
        <Container type={type} {...rest}>
            {asHeader?
            <BackButton onPress={handleGoBack}>
                <IconBack  type={type}/>
            </BackButton>
            : <IconExpand type={type}/>}
            <Title>{percentage}%</Title>
            <SubTitle>das refeições dentro da dieta</SubTitle>
        </Container>

    )
}