import { StatsCard } from 'components/StatsCard';
import { Container, Main, Title, BoxContainer, OnDietBoxContainer} from './styles'
import { StatsBox } from 'components/StatsBox';

type Props = {
    percentage: string
}

export function Stats ({percentage}:Props) {
    const type = Number(percentage.replace(",", ".")) >= 50 ? 'GREEN' : 'RED';
    return (
        <Container type={type}>
            <StatsCard percentage={percentage} asHeader/>
            <Main>
                <Title>Estatísticas gerais</Title>
                <BoxContainer>
                    <StatsBox quantity={21} subject='Melhor sequencia de pratos dentro da dieta' />
                    <StatsBox quantity={109} subject='Refeições registradas' />
                    <OnDietBoxContainer>
                        <StatsBox quantity={99} subject='Refeições dentro da dieta' type='GREEN' />
                        <StatsBox quantity={10} subject='Refeições fora da dieta' type='RED' />
                    </OnDietBoxContainer>
                </ BoxContainer>
                
            </Main>
        </Container>
    )
}