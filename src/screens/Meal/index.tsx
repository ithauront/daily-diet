import { Header } from "components/Header"
import { Input } from "components/Input"
import { ButtonBox, Container, DateTimeInput, DateTimeInputContainer, DescriptionInput, Form, InputTitle, NameInput } from "./styles"
import DateTimePicker from "@react-native-community/datetimepicker"
import { Alert, FlatList, Platform, View } from "react-native"
import { useEffect, useState } from "react"
import { RadioInput } from "components/RadioInput"
import { RadioInputStyleProps } from "components/RadioInput/styles"
import { Button } from "components/Button"
import { useNavigation, useRoute } from "@react-navigation/native"
import { mealCreate } from "storage/meals/mealCreate"
import { mealsGetOne } from "storage/meals/mealsGetOne"
import { mealUpdate } from "storage/meals/mealUpdate"
import { CustomModal } from "components/Modal"
import dayjs from "dayjs"

type RouteParams = {
    bgColor?: 'GREEN' | 'RED'
    isInEdit?: boolean
    mealNameParam?: string
    dateParam?: string
    timeParam?: string
}

export function Meal() {
        const [date, setDate] = useState(new Date());
        const [time, setTime] = useState(new Date());
        const [mealName, setMealName] = useState('')
        const [mealDescription, setMealDescription] = useState('')
        const [showDatePicker, setShowDatePicker] = useState(false);
        const [showTimePicker, setShowTimePicker] = useState(false);
        const [isOnDiet , setIsOnDiet] = useState<string | undefined>(undefined)
        const [isModalVisible, setIsModalVisible] = useState(false)

        const route = useRoute()
        const { isInEdit=false, bgColor=undefined, mealNameParam, dateParam, timeParam } = route.params as RouteParams
        
        const navigation= useNavigation()

        function updateMeal () {
            try{
              setIsModalVisible(true)
            } catch(error) {
                console.log(error)
            }
        }

        async function updateMealToEdit() {
            if (isInEdit && mealNameParam && dateParam && timeParam) {
                const mealToEdit = await mealsGetOne(mealNameParam, dateParam, timeParam)
    
                if (!mealToEdit) {
                    Alert.alert('Informações incompletas', 'Não foi possível encontrar a refeição que você quer editar, por favor tente novamente.')
                    navigation.navigate('home')
                    return
                }
    
                setMealName(mealToEdit.name ?? '')
                setIsOnDiet(mealToEdit.isOnDiet ? 'Sim' : 'Não')
                setDate(mealToEdit.date ? dayjs(mealToEdit.date).toDate() : new Date())
                setMealDescription(mealToEdit.description ?? '')
                setTime(mealToEdit.time ? dayjs(`${mealToEdit.date}${mealToEdit.time}`).toDate() : new Date());
 
            }
        }

       async function handleMealPosted() {
        if (!mealName.trim() || !mealDescription.trim() || isOnDiet === undefined) {
            alert("Preencha todos os campos antes de salvar!")
            return
        }
       
        const formattedDate = dayjs(date).format("YYYY-MM-DD")
        const formattedTime = dayjs(time).format("HH:mm")

        const newMeal = {
            name: mealName,
            description: mealDescription,
            date: formattedDate, 
            time: formattedTime,
            isOnDiet: isOnDiet === 'Sim'
        };
      
           await mealCreate(newMeal)

           navigation.navigate('mealPosted',{onDiet: newMeal.isOnDiet})
        }

        async function handleUpdateMeal() {
            if (!mealNameParam || !dateParam || !timeParam) {
                Alert.alert("Erro", "Não foi possível encontrar a refeição para atualizar.");
                navigation.navigate('home')
                return
            }
            const formattedDate = dayjs(date).format("YYYY-MM-DD")
            const formattedTime = dayjs(time).format("HH:mm")

            const updatedMeal = {
                name: mealName,
                description: mealDescription,
                date: formattedDate, 
                time: formattedTime,
                isOnDiet: isOnDiet === 'Sim'
            };

            await mealUpdate({
                oldDate:dateParam!,oldName: mealNameParam!, oldTime:timeParam!, meal: updatedMeal})
            navigation.navigate('home')
            
        } 

        useEffect(()=>{
            updateMealToEdit()
        }, [isInEdit])

        return(
            <Container type={bgColor} >
                 {isModalVisible? <CustomModal isEdit visible={isModalVisible} onCancel={()=>setIsModalVisible(false)} onConfirm={handleUpdateMeal}/> : null}
                <Header info={isInEdit? "Editar refeição" :"Nova refeição"} />
                <Form>
                    <NameInput>
                        <InputTitle>Nome</InputTitle>
                        <Input onChangeText={(text) => setMealName(text)}
                        value={mealName}  />
                    </NameInput>
                    <DescriptionInput>
                    <InputTitle>Descrição</InputTitle>
                    <Input multiline={true}
                     textAlignVertical="top"
                     onChangeText={(text) => setMealDescription(text)}
                     value={mealDescription} />
                    </DescriptionInput>
                    <DateTimeInputContainer>
                        <DateTimeInput>
                        <InputTitle>Data</InputTitle>
                        {showDatePicker && (
                            <DateTimePicker
                            style={{gap: 8}}
                                value={date}
                                mode="date"
                                display={Platform.OS === "ios" ? "spinner" : "calendar"}
                                onChange={(event, selectedDate) => {
                                    setShowDatePicker(false);
                                    if (selectedDate) {
                                        setDate(selectedDate);
                                    }
                                }}
                            />
                        )}
                        <Input value={dayjs(date).format("DD/MM/YYYY")} onFocus={() => setShowDatePicker(true)} />
                        </DateTimeInput>
                        <DateTimeInput>
                        <InputTitle>Hora</InputTitle>
                        {showTimePicker && (
                            <DateTimePicker
                                value={time}
                                mode="time"
                                display={Platform.OS === "ios" ? "spinner" : "clock"}
                                onChange={(event, selectedTime) => {
                                    setShowTimePicker(false);
                                    if (selectedTime) {
                                        setTime(selectedTime);
                                    }
                                }}
                            />
                        )}
                        <Input value={dayjs(time).format("HH:mm")} onFocus={() => setShowTimePicker(true)} />
                        </DateTimeInput>
                    </DateTimeInputContainer>
                    <InputTitle>Esta dentro da dieta?</InputTitle>
                    <FlatList
                     data={['Sim', 'Não']as RadioInputStyleProps[]}
                     ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
                     keyExtractor={(item)=>item}
                     renderItem={({item})=>(
                        <RadioInput title={item} type={item} isActive={item === isOnDiet}
                        onPress={()=>setIsOnDiet(item)}          
                    />)}
                    horizontal />
                    <ButtonBox>
                    <Button title={isInEdit?'Salvar alterações': 'Cadastrar refeição'} onPress={isInEdit?  updateMeal : handleMealPosted} />
                    </ButtonBox>
                </Form>
            </Container>
        )
}