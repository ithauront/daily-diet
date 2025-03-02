import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import {useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans'
import { Loading } from "components/Loading";

import { Routes } from "routes";


export default function App() {
  const [fonstLoaded] = useFonts({
    NunitoSans_400Regular, NunitoSans_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      {fonstLoaded ? <Routes />: <Loading /> }
    </ThemeProvider>
  );
}
