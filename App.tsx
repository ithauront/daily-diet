import { StatusBar } from "react-native";
import { Home } from "screens/Home";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import {useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans'
import { Loading } from "components/Loading";
import { Stats } from "screens/Stats";
import { NewMeal } from "screens/NewMeal";
import { MealPosted } from "screens/MealPosted";
import { MealDetails } from "screens/MealDetails";


export default function App() {
  const [fonstLoaded] = useFonts({
    NunitoSans_400Regular, NunitoSans_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      {fonstLoaded ?   <MealDetails onDiet={false} meal="Sanduiche" description="Sanduiche de atum com pão integral" dateAndTime="12/08/2025 às 18:00"  />: <Loading /> }
    
    </ThemeProvider>
  );
}
