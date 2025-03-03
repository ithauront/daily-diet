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

type RouteParams = {
    onDiet: boolean
    meal: string
    description: string
    dateAndTime: string
}

export function MealDetails() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const navigation = useNavigation()

    
        const route = useRoute()
        const { onDiet, dateAndTime, description, meal } = route.params as RouteParams

    function handleEditMeal() {
        navigation.navigate('meal', {isInEdit:true})
    }

    function mealRemove() {
        console.log('refeição removida') //TODO fazer a real função para remover do storage. dentro de um try catch
         navigation.navigate('home')
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
                        <Text>{dateAndTime}</Text>
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