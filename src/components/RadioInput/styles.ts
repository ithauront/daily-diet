import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type RadioInputStyleProps = 'Sim' | 'Não'

type Props = {
    type?: RadioInputStyleProps
    isActive?: boolean
}


export const Container = styled(TouchableOpacity)<Props>`
    background-color: ${({theme, type, isActive}) => 
     type === 'Sim' && isActive  ? theme.COLORS.GREEN_LIGHT :
     type === 'Não' && isActive ? theme.COLORS.RED_LIGHT :
     theme.COLORS.GRAY_5
     };
     border: 1px solid ${({theme, type, isActive}) => 
     type === 'Sim' && isActive  ? theme.COLORS.GREEN_DARK :
     type === 'Não' && isActive ? theme.COLORS.RED_DARK :
     theme.COLORS.GRAY_5
     };
     max-height: 50px;
     min-height: 50px;
     border-radius: 6px;
     width: 160px;
     flex: 1;

     align-items: center;
     justify-content: center
`

export const TitleStatusContainer = styled.View`
     flex-direction: row;
     align-items: center;
     justify-content: center;
     gap: 8px
`

export const Title = styled.Text`
     font-size : ${({theme})=>theme.FONT_SIZE.SM}px;
     font-family: ${({theme})=>theme.FONT_FAMILY.BOLD};
     color: ${({theme})=>theme.COLORS.GRAY_1}
`

export const StatusIndicator = styled.View<Props>`
width: 8px;
height: 8px;

border-radius: 4px;

background-color: ${({ theme, type }) => type === 'Sim' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

`