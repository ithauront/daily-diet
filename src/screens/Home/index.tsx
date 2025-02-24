import {Image, View} from 'react-native'
import { Avatar, Container, HomeHeader, Title } from './styles';
import logo from '../../../assets/Logo.png'
import { Button } from 'components/Button';
import { Plus } from 'phosphor-react-native';
import theme from 'theme';
import { StatsCard } from 'components/StatsCard';
import { MealCard } from 'components/MealCard';



export function Home() {
  return (
    <Container >
      <HomeHeader>
        <Image source={logo} />
        <Avatar  source={{ uri: 'https://github.com/ithauront.png' }} />
      </HomeHeader>
      <StatsCard percentage='98,03' />
      <View style={{gap: 8, height: 79}}>
      <Title>Refeições</Title>
      <Button title='Nova refeição'>
        <Plus color={theme.COLORS.WHITE} size={18} /> 
      </Button>
      </View>
      <View>
      <MealCard time='20:00' meal='X-tudo' onDiet={false} />
      <MealCard time='16:30' meal='Salada' onDiet />
      </View>
    </Container>
  );
}

