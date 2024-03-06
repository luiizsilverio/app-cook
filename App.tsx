import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

import StacksRoutes from '@/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <>
      <NavigationContainer>
        <StacksRoutes />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

