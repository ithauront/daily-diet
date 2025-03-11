import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export type StatsColorStyleProps = 'GREEN' | 'RED'
type Props = {
    type?: StatsColorStyleProps
}

export const Container = styled(SafeAreaView)<Props>`
    flex: 1;
    background-color: ${({theme})=>
         theme.COLORS.GRAY_5};
`


export const Form = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.GRAY_7};
    align-items: center;
    gap: 23px;
    padding: 33px 24px;
    border-radius: 20px;
`

export const NameInput = styled.View`
    height: 70px;
    width: 100%;
    gap: 4px;
`

export const DescriptionInput = styled.View`
    height: 142px;
    width: 100%;
    gap: 4px;
`

export const DateTimeInputContainer = styled.View`
    height: 70px;
    width: 100%;
    gap: 20px;
    flex-direction: row
`

export const DateTimeInput = styled.View`
    height: 70px;
    width: 47%;
    gap: 4px;
`

export const InputTitle = styled.Text`
    color: ${({theme})=> theme.COLORS.GRAY_2};
    font-size:  ${({theme})=> theme.FONT_SIZE.SM}px;
    font-family:  ${({theme})=> theme.FONT_FAMILY.BOLD};
`

export const ButtonBox = styled.View`
    height:50px;
    width: 100%;
    padding: 0;
`