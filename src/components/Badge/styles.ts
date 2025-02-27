import styled from "styled-components/native";


type Props = {
    onDiet?: boolean
}

export const Container = styled.View`
    height:34px;
    align-self: flex-start;
    background-color: ${({theme})=> theme.COLORS.GRAY_6};
    gap: 8px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 8px 16px;
    border-radius: 1000px

`

export const Title = styled.Text`
     font-size : ${({theme})=>theme.FONT_SIZE.SM}px;
     font-family: ${({theme})=>theme.FONT_FAMILY.REGULAR};
     color: ${({theme})=>theme.COLORS.GRAY_1};
     line-height: 18px; // para alinhar corretamente o Text que tem um line height padrão eu pensei em pegar o height do componente pai diminuir o padding vertical dele e setar isso como lineheight do text.
`



export const StatusIndicator = styled.View<Props>`
width: 8px;
height: 8px;

border-radius: 4px;

background-color: ${({ theme, onDiet }) => onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

`