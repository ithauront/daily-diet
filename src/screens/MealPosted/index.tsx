import { Button } from "components/Button";
import { ButtonContainer, Container, SubTitle, Title, TitleContainer } from "./styles";
import { Image, Text } from "react-native";
import onDietImage from '../../../assets/onDietImage.png'
import offDietImage from '../../../assets/offDietImage.png'
import theme from "theme";

type Props = {
    onDiet: boolean;
  };

export function MealPosted({onDiet}: Props) {

    return(
        <Container>
            <TitleContainer>
                <Title type={onDiet}>{onDiet? 'Continue assim!' : 'Que pena!'}</Title>
                <SubTitle>
                    {onDiet ? (
                         <> Você continua <Text style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>dentro da dieta</Text>. Muito bem! </>
                        ) : (
                          <>Você <Text style={{ fontFamily: theme.FONT_FAMILY.BOLD }}>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!</>
                     )}
                </SubTitle> 
            </TitleContainer>
            <Image source={onDiet?onDietImage:offDietImage} />
            <ButtonContainer>
                <Button title="Ir para pagina inicial" type="PRIMARY" />
            </ButtonContainer>
        </Container>
    )
    
}