import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
flex: 1;
min-height: 50px;
max-height: 50px;

background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GRAY_2 : 'transparent'};
border: 1px solid ${({theme, type}) => type === 'PRIMARY' ? 'transparent' : theme.COLORS.GRAY_1};

border-radius: 6px;
justify-content: center;
align-items: center;

`

export const TitleWrapper = styled.View`
flex-direction: row;
gap: 8px;
justify-content: center;
align-items: center;
`

export const ButtonTitle = styled.Text<Props>`
font-size: ${({theme})=> theme.FONT_SIZE.SM}px;
color: ${({theme, type = 'PRIMARY'}) => type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
`