import { Container, SubTitle, Title } from "./styles";

type Props = {
    quantity: number
    subject: string
    type?: 'GREEN' | 'RED' 
}

export function StatsBox({quantity, subject, type = undefined}: Props ) {

    return (
        <Container type={type} >
            <Title>{quantity}</Title>
            <SubTitle>{subject}</SubTitle>
        </Container>
    )
}