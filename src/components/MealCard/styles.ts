import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type MealCardStyleProps = 'GREEN' | 'RED'

type Props = {
    type: MealCardStyleProps
}

export const Container = styled(TouchableOpacity)`
flex: 1;
flex-direction: row;align-items: center;
justify-content: space-between;

min-height: 49px;
max-height: 49px;
margin-top: 8px;
padding: 14px 16px 12px 14px;

border-radius: 6px;
border: 1px solid ${({theme})=>theme.COLORS.GRAY_5}
`

export const TimeTitleContainer = styled.View`
    width: 90%;

    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    gap: 12px;
`

export const Time = styled.Text`
    width: 34px;
    height: 16px;

    color: ${({theme})=> theme.COLORS.GRAY_1};
    font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
    font-size: ${({theme})=> theme.FONT_SIZE.XSM}px
`

export const Separator = styled.View`
width: 2px;
height: 14px;

background-color: ${({theme})=> theme.COLORS.GRAY_4};
`

export const Item = styled.Text`
    flex: 1;
    height: 21px;

    color: ${({theme})=> theme.COLORS.GRAY_2};
    font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme})=> theme.FONT_SIZE.MD}px
`

export const StatusIndicator = styled.View<Props>`
width: 14px;
height: 14px;

border-radius: 7px;

background-color: ${({ theme, type }) => type === 'GREEN' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`