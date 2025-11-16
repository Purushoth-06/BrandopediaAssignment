import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import useAppFonts from "./src/theme/fonts";
import * as Animatable from "react-native-animatable";
import HomeScreen from "./src/ui/HomeScreen";

export default function App() {
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animatable.Text
          animation="fadeIn"
          iterationCount="infinite"
          duration={2000}
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 20,
            color: "#FFFFFF",
          }}
        >
          LOADING
        </Animatable.Text>
      </View>
    );
  }
  return (
    <>
      <StatusBar style="light" backgroundColor="#0A121E" />
      <HomeScreen />
    </>
  );
}
