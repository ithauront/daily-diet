import {Image, View} from 'react-native'
import { Avatar, Container, HomeHeader, Title } from './styles';
import logo from '../../../assets/Logo.png'
import { Button } from 'components/Button';
import { Plus } from 'phosphor-react-native';
import theme from 'theme';



export function Home() {
  return (
    <Container >
      <HomeHeader>
        <Image source={logo} />
        <Avatar  source={{ uri: 'https://github.com/ithauront.png' }} />
      </HomeHeader>
      <View style={{gap: 8}}>
      <Title>Refeições</Title>
      <Button title='Nova refeição'>
        <Plus color={theme.COLORS.WHITE} size={18} /> 
      </Button>
      
      </View>
    </Container>
  );
}

