import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Title } from "./styles";

type Props = {
    info?:string

}


export function Header({info, }:Props) {
    const navigation = useNavigation()

    function handleGoBack(){
        navigation.navigate('home')
    }
    return(
        <Container >
            <BackButton onPress={handleGoBack}>
                <BackIcon />
            </BackButton>
            <Title>{info}</Title>
        </Container>
    )
}