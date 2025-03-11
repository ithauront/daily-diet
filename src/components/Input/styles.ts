import { TextInput } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled(TextInput)`
flex: 1;

${({theme})=> css`
border:1px solid ${theme.COLORS.GRAY_5};
color:${theme.COLORS.GRAY_2};
font-family: ${({theme})=>theme.FONT_FAMILY.REGULAR};
font-size: ${({theme})=>theme.FONT_SIZE.MD}px;
`}

border-radius: 6px;
padding: 14px;
`