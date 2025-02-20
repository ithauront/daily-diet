import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.GRAY_5};

`

export const Title = styled.Text`
font-size: 32px;
color: ${({theme})=> theme.COLORS.GRAY_1};
font-family: ${({theme})=>theme.FONT_FAMILY.REGULAR};

`
