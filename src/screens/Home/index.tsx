import {Image} from 'react-native'
import { Avatar, Container, HomeHeader, Title } from './styles';
import logo from '../../../assets/Logo.png'



export function Home() {
  return (
    <Container >
      <HomeHeader>
        <Image source={logo} />
        <Avatar  source={{ uri: 'https://github.com/ithauront.png' }} />
      </HomeHeader>
      <Title>Home</Title>
    </Container>
  );
}

