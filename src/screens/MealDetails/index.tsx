import { Header } from "components/Header";
import { ButtonBox, Container, DetailsBox, Main, SubTitle, Text, Title } from "./styles";
import { View } from "react-native";
import { Badge } from "components/Badge";
import { Button } from "components/Button";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import theme from "theme";

type Props = {
    onDiet: boolean
    meal: string
    description: string
    dateAndTime: string
}

export function MealDetails({onDiet, dateAndTime, description, meal}:Props) {

    return(
        <Container type={onDiet?'GREEN':'RED'}>
            <Header info="Refeição"  />
            <Main>  
                <DetailsBox>
                    <View style={{gap: 8}}>
                        <Title>{meal}</Title>
                        <Text>{description}</Text>
                    </View>
                    <View style={{gap:8}}>
                        <SubTitle>Data e hora</SubTitle>
                        <Text>{dateAndTime}</Text>
                    </View>
                    <Badge onDiet={onDiet} />
                </DetailsBox>

                <ButtonBox>
                <Button title="Editar refeição"><PencilSimpleLine size={18} color={theme.COLORS.WHITE}/></Button>
                <Button type="SECONDARY" title="Excluir refeição"><Trash size={18} color={theme.COLORS.GRAY_1}/></Button>
                </ButtonBox>

            </Main>
        </Container>
    )
    
}