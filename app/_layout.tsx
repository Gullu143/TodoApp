import { Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "lexenda-regular": require("../assets/fonts/LexendDeca-Regular.ttf"),
    "lexenda-medium": require("../assets/fonts/LexendDeca-Medium.ttf"),
    "lexenda-semiBold": require("../assets/fonts/LexendDeca-SemiBold.ttf"),
    "lexenda-bold": require("../assets/fonts/LexendDeca-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
