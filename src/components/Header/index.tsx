import { BackButton, BackIcon, Container, Title } from "./styles";

type Props = {
    info?:string

}


export function Header({info, }:Props) {
    return(
        <Container >
            <BackButton>
                <BackIcon />
            </BackButton>
            <Title>{info}</Title>
        </Container>
    )
}