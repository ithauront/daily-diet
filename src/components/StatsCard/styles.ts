import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type CardColorStyleProps = 'GREEN' | 'RED'

type Props = {
    type: CardColorStyleProps
}


export const Container = styled(TouchableOpacity)<Props>`
    position: relative;
    flex: 1;

    min-height: 102px;
    max-height: 102px;
    padding: 20px 16px;
    gap: 2px;

    border-radius: 8px;

    align-items: center;
    justify-content: center;

    background-color: ${({theme, type})=> type === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT}
`

export const IconExpand = styled(ArrowUpRight).attrs<Props>(({theme, type})=>({
    color: type === 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    size: 24,
}))<Props>`
    position: absolute;
    top: 3px;
    right: 3px;
`
export const BackButton = styled.TouchableOpacity`
    width: 40%;
    position: absolute;
    top: 10px;
    left: 10px;
`

export const IconBack = styled(ArrowLeft).attrs<Props>(({theme, type})=>({
    color: type === 'GREEN' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    size: 24,
}))<Props>`

`

export const Title = styled.Text`
    color: ${({theme})=> theme.COLORS.GRAY_1};
    font-size:  ${({theme})=> theme.FONT_SIZE.XXL}px;
    font-family: ${({theme})=> theme.FONT_FAMILY.BOLD}
`

export const SubTitle = styled.Text`
    color: ${({theme})=> theme.COLORS.GRAY_2};
    font-size:  ${({theme})=> theme.FONT_SIZE.SM}px;
    font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR}
`
