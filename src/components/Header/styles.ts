import { ArrowLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
height: 104px;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 24px;
`;

export const Title = styled.Text`
    flex: 1;
    color: ${({theme})=> theme.COLORS.GRAY_1};
    font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
    font-size:  ${({theme})=> theme.FONT_SIZE.LG};
`

export const BackButton = styled.TouchableOpacity`
    width: 33%;
`

export const BackIcon = styled(ArrowLeft).attrs(({theme})=>({
    size: 24,
    color: theme.COLORS.GRAY_2
}))`
`