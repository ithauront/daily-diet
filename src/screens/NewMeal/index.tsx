    import { Header } from "components/Header";
    import { Input } from "components/Input";
    import { Container, DateTimeInput, DateTimeInputContainer, DescriptionInput, Form, InputTitle, NameInput } from "./styles";
    import DateTimePicker from "@react-native-community/datetimepicker";
    import { FlatList, Platform, View } from "react-native";
    import { useState } from "react";
import { RadioInput } from "components/RadioInput";
import { RadioInputStyleProps } from "components/RadioInput/styles";

    type Props = {
        info?:string
        bgColor?: 'GREEN' | 'RED'
    }


    export function NewMeal({ bgColor = undefined}:Props) {
        const [date, setDate] = useState(new Date());
        const [time, setTime] = useState(new Date());
        const [showDatePicker, setShowDatePicker] = useState(false);
        const [showTimePicker, setShowTimePicker] = useState(false);
        const [isOnDiet , setIsOnDiet] = useState<string | undefined>(undefined)

        return(
            <Container type={bgColor} >
                <Header info="Nova refeição" />
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
                </Form>
            </Container>
        )
    }