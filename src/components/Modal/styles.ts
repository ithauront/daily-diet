import styled from "styled-components/native";

export const ModalOverlay = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`

export const Container = styled.View`
    background-color: ${({theme})=>theme.COLORS.GRAY_7};
    height: 192px;
    width: 327px;
    border-radius: 8px;

    gap: 32px;
    padding: 40px 24px 24px 24px
`

export const Title = styled.Text`
    text-align: center;
    font-size: ${({theme})=>theme.FONT_SIZE.LG}px;
    font-family: ${({theme})=>theme.FONT_FAMILY.BOLD};
    color: ${({theme})=>theme.COLORS.GRAY_2};
`

export const ButtonContainer = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    gap: 12px
`