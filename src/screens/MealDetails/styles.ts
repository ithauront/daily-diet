import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"

export type StatsColorStyleProps = 'GREEN' | 'RED'

type Props = {
    type?: StatsColorStyleProps
}

export const Container = styled(SafeAreaView)<Props>`
    flex: 1;
    background-color: ${({theme, type})=>
         type === 'GREEN' ? theme.COLORS.GREEN_LIGHT : 
         theme.COLORS.RED_LIGHT };
`

export const Main = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.GRAY_7};
    justify-content: space-between;
    padding: 40px 24px;
    border-radius: 20px;
`
export const DetailsBox = styled.View`
    width: 100%;
    gap: 24px;
    padding: 0;
`

export const ButtonBox = styled.View`
    height:108px;
    width: 100%;
    gap: 8px;
    padding: 0;
`

export const Title = styled.Text`
    color: ${({theme})=> theme.COLORS.GRAY_1};
    font-size:  ${({theme})=> theme.FONT_SIZE.XL}px;
    font-family:  ${({theme})=> theme.FONT_FAMILY.BOLD};
`
export const SubTitle = styled.Text`
    color: ${({theme})=> theme.COLORS.GRAY_1};
    font-size:  ${({theme})=> theme.FONT_SIZE.SM}px;
    font-family:  ${({theme})=> theme.FONT_FAMILY.BOLD};
`

export const Text = styled.Text`
    color: ${({theme})=> theme.COLORS.GRAY_2};
    font-size:  ${({theme})=> theme.FONT_SIZE.MD}px;
    font-family:  ${({theme})=> theme.FONT_FAMILY.REGULAR};
`