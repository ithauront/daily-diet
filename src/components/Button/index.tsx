import { TouchableOpacityProps } from "react-native"
import { ButtonTitle, ButtonTypeStyleProps, Container, TitleWrapper } from "./styles"


type Props = TouchableOpacityProps & {
    children?: React.ReactNode
    type? : ButtonTypeStyleProps
    title: string
}

export function Button({children, title, type='PRIMARY', ...rest}: Props) {
    return(
        <Container type={type} {...rest}>
            <TitleWrapper>
                {children}
                <ButtonTitle type={type}>{title}</ButtonTitle>
            </TitleWrapper>
            
        </Container>
    )
}