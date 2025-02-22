import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.GRAY_5};
    padding: 24px

`

export const Title = styled.Text`
    font-size: ${({theme})=>theme.FONT_SIZE.MD}px;
    color: ${({theme})=> theme.COLORS.GRAY_1};
    font-family: ${({theme})=>theme.FONT_FAMILY.REGULAR};

`

export const HomeHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
`

export const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border: 2px solid ${({theme})=> theme.COLORS.GRAY_2};
    border-radius: 20px;
    align-items: center;
    justify-content: center;

`