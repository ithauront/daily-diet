import { Container, StatusIndicator, Title } from "./styles";

type Props = {
    onDiet: boolean
}
export function Badge({onDiet}:Props) {

    return(
        <Container>
            <StatusIndicator onDiet={onDiet} />
            <Title>{onDiet? 'dentro da dieta' : 'fora da dieta'}</Title>
            
        </Container>
    )
    
}