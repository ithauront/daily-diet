import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.GRAY_6};
    align-items: center;
    justify-content: center;

`

export const Title = styled.Text`
font-size: 32px;
color: ${({theme})=> theme.COLORS.GRAY_1};
font-family: ${({theme})=>theme.FONT_FAMILY.REGULAR}
`
