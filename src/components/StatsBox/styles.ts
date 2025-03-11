import styled from "styled-components/native";

export type BoxColorStyleProps = 'GREEN' | 'RED'

type Props = {
    type?: BoxColorStyleProps
}



export const Container = styled.View<Props>`
    flex: 1;
    max-height: 107px;
    min-height: 107px;

    align-items: center;
    justify-content: center; 
    
    background-color : ${({theme, type})=> 
        type === 'GREEN' ? theme.COLORS.GREEN_LIGHT :
        type === 'RED' ? theme.COLORS.RED_LIGHT :
        theme.COLORS.GRAY_6};

    border-radius: 8px;
    padding: 16px;
    gap: 8px;
`

export const Title = styled.Text`
    color: ${({theme})=> theme.COLORS.GRAY_1};
    font-size:  ${({theme})=> theme.FONT_SIZE.XL}px;
    font-family: ${({theme})=> theme.FONT_FAMILY.BOLD}
`

export const SubTitle = styled.Text`
    color: ${({theme})=> theme.COLORS.GRAY_2};
    font-size:  ${({theme})=> theme.FONT_SIZE.XSM}px;
    font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR}
`
