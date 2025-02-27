import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export type onDiet = boolean

type Props = {
    type: onDiet
}


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.GRAY_7};
    padding: 24px;
    gap: 32px;

    align-items: center;
    justify-content: center;


`

export const TitleContainer = styled.View`
    width: 100%;
    gap: 8px;
    align-items: center;
    justify-content: center
`

export const Title = styled.Text<Props>`
    color : ${({theme, type})=> type === false ? theme.COLORS.RED_DARK: theme.COLORS.GREEN_DARK};
    font-family: ${({theme})=>theme.FONT_FAMILY.BOLD};
    font-size: ${({theme})=>theme.FONT_SIZE.XL}px
`

export const SubTitle = styled.Text`
    color : ${({theme})=>theme.COLORS.GRAY_1};
    font-family: ${({theme})=>theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme})=>theme.FONT_SIZE.MD}px;
    text-align:center
`

export const ButtonContainer = styled.View`
width: 191px
`