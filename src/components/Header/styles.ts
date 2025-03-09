import { ArrowLeft } from "phosphor-react-native"
import styled from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  height: 104px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px;
  position: relative; 
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  text-align: center; 
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px; 
  width: 120px;
  height: 40px;
  justify-content: center;
  align-items: flex-start;
  padding-left: 2px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_2,
}))``;
