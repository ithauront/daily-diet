import { BackButton, BackIcon, Container, Title } from "./styles";

type Props = {
    info?:string
    bgColor?: 'GREEN' | 'RED'
}


export function Header({info, bgColor = undefined}:Props) {
    return(
        <Container type={bgColor} >
            <BackButton>
                <BackIcon />
            </BackButton>
            <Title>{info}</Title>
        </Container>
    )
}