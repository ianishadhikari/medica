import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "white" },
            animation: "slide_from_right",
            header: () => null,
            navigationBarHidden: true,
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </GestureHandlerRootView>
    </>
  );
}
