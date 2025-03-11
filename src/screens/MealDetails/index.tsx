import { Header } from "components/Header";
import { ButtonBox, Container, DetailsBox, Main, SubTitle, Text, Title } from "./styles";
import { Alert, View } from "react-native";
import { Badge } from "components/Badge";
import { Button } from "components/Button";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import theme from "theme";
import { useState } from "react";
import { CustomModal } from "components/Modal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { mealDeleteOne } from "storage/meals/mealDelete";

type RouteParams = {
    onDiet: boolean
    meal: string
    description: string
    date: string
    time: string
}

export function MealDetails() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const navigation = useNavigation()

    
    const route = useRoute()
    const { onDiet, date, time, description, meal } = route.params as RouteParams
    const formattedDate = new Date(date).toLocaleDateString("pt-BR")

    function handleEditMeal() {
        navigation.navigate('meal', {isInEdit:true, mealNameParam:meal, dateParam:date, timeParam: time})
    }

    async function mealRemove() {
        try {
            await mealDeleteOne(meal,date,time)
            navigation.navigate('home')
        } catch(error) {
            Alert.alert('Erro ao remover', 'Ocorreu um erro ao tentar remover a refeição.')
        }
         
    }

    function handleDeleteMeal () {
        try{
          setIsModalVisible(true)
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <Container type={onDiet?'GREEN':'RED'}>
            {isModalVisible? <CustomModal visible={isModalVisible} onCancel={()=>setIsModalVisible(false)} onConfirm={mealRemove}/> : null}
            <Header info="Refeição"  />
            <Main>  
                <DetailsBox>
                    <View style={{gap: 8}}>
                        <Title>{meal}</Title>
                        <Text>{description}</Text>
                    </View>
                    <View style={{gap:8}}>
                        <SubTitle>Data e hora</SubTitle>
                        <Text>{formattedDate} às {time}</Text>
                    </View>
                    <Badge onDiet={onDiet} />
                </DetailsBox>

                <ButtonBox>
                <Button title="Editar refeição" onPress={handleEditMeal}><PencilSimpleLine size={18} color={theme.COLORS.WHITE}/></Button>
                <Button type="SECONDARY" title="Excluir refeição" onPress={handleDeleteMeal}><Trash size={18} color={theme.COLORS.GRAY_1}/></Button>
                </ButtonBox>

            </Main>
        </Container>
    )
    
}