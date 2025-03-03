    import { Header } from "components/Header";
    import { Input } from "components/Input";
    import { ButtonBox, Container, DateTimeInput, DateTimeInputContainer, DescriptionInput, Form, InputTitle, NameInput } from "./styles";
    import DateTimePicker from "@react-native-community/datetimepicker";
    import { FlatList, Platform, View } from "react-native";
    import { useState } from "react";
import { RadioInput } from "components/RadioInput";
import { RadioInputStyleProps } from "components/RadioInput/styles";
import { Button } from "components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

    type RouteParams = {
        bgColor?: 'GREEN' | 'RED'
        isInEdit?: boolean
    }


    export function Meal() {
        const [date, setDate] = useState(new Date());
        const [time, setTime] = useState(new Date());
        const [showDatePicker, setShowDatePicker] = useState(false);
        const [showTimePicker, setShowTimePicker] = useState(false);
        const [isOnDiet , setIsOnDiet] = useState<string | undefined>(undefined)

        const route = useRoute()
        const { isInEdit=false, bgColor=undefined } = route.params as RouteParams
        //TODO quando isInEdit colocar no input os values originais que vamos pegar.
        // TODO forçar usuario a escolher se esta ou não na diet.
        const navigation= useNavigation()
        
        function handleMealPosted() {
           const onDiet = isOnDiet === 'Sim'    ?   true    :   false
            navigation.navigate('mealPosted',{onDiet})
        }
        return(
            <Container type={bgColor} >
                <Header info={isInEdit? "Editar refeição" :"Nova refeição"} />
                <Form>
                    <NameInput>
                        <InputTitle>Nome</InputTitle>
                        <Input />
                    </NameInput>
                    <DescriptionInput>
                    <InputTitle>Descrição</InputTitle>
                    <Input multiline={true} textAlignVertical="top" />
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
                         <Input value={date.toLocaleDateString()} onFocus={() => setShowDatePicker(true)} />
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
                        <Input value={time.toLocaleTimeString()} onFocus={() => setShowTimePicker(true)} />
                        </DateTimeInput>
                    </DateTimeInputContainer>
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
                    <Button title={isInEdit?'Salvar alterações': 'Cadastrar refeição'} onPress={()=>handleMealPosted()} />
                    </ButtonBox>
                </Form>
            </Container>
        )
    }