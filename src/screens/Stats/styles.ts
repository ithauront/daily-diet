import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export type StatsColorStyleProps = 'GREEN' | 'RED'

type Props = {
    type: StatsColorStyleProps
}

export const Container = styled(SafeAreaView)<Props>`
    flex: 1;
    background-color: ${({theme, type})=> type === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    gap: 32px
`

export const Main = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.GRAY_7};
    align-items: center;
    gap: 23px;
    padding: 33px 24px;
    border-radius: 20px;
`

export const Title = styled.Text`
    font-family: ${({theme})=>theme.FONT_FAMILY.BOLD};
    font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
    color: ${({theme})=>theme.COLORS.GRAY_1}
`

export const BoxContainer = styled.View`
    width: 375px;
    height: 644px;
    gap: 12px
`

export const OnDietBoxContainer = styled.View`
    flex-direction: row;
    width: 100%;
    gap: 12px
`