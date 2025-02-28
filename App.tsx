import { StatusBar } from "react-native";
import { Home } from "screens/Home";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import {useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans'
import { Loading } from "components/Loading";
import { Stats } from "screens/Stats";
import { Meal } from "screens/Meal";
import { MealPosted } from "screens/MealPosted";
import { MealDetails } from "screens/MealDetails";


export default function App() {
  const [fonstLoaded] = useFonts({
    NunitoSans_400Regular, NunitoSans_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      {fonstLoaded ?   <Meal isInEdit />: <Loading /> }
    
    </ThemeProvider>
  );
}
