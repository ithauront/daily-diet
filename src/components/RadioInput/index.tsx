import { TouchableOpacityProps, View } from 'react-native'
import {Container, RadioInputStyleProps, StatusIndicator, Title, TitleStatusContainer} from './styles'

type Props = TouchableOpacityProps & {
    title: string
    type: RadioInputStyleProps
    isActive: boolean
}

export function RadioInput({title, type, isActive = false, ...rest }:Props) {
    
    return (
        <Container type={type} isActive={isActive} {...rest}>
            <TitleStatusContainer>
            <StatusIndicator type={type} />
            <Title>{title}</Title>
            </TitleStatusContainer>
        </Container>
    )
}